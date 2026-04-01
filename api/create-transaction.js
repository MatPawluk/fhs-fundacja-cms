import crypto from 'crypto';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { amount, description, email, childId } = req.body;

  const merchantId = process.env.P24_MERCHANT_ID;
  const posId = process.env.P24_POS_ID || merchantId;
  const crc = process.env.P24_CRC_KEY;
  const apiKey = process.env.P24_API_KEY;
  const isSandbox = process.env.P24_SANDBOX === 'true';

  if (!merchantId || !crc || !apiKey) {
    return res.status(500).json({ error: 'Missing Przelewy24 configuration' });
  }

  const sessionId = crypto.randomBytes(16).toString('hex');
  const p24Amount = Math.round(amount * 100); // P24 uses grosz/cents
  const currency = 'PLN';
  const country = 'PL';
  const language = 'pl';

  // Sign formula: SHA384(JSON.stringify({sessionId, merchantId, amount, currency, crc}))
  const signPayload = JSON.stringify({
    sessionId,
    merchantId: parseInt(merchantId),
    amount: p24Amount,
    currency,
    crc
  });
  
  const sign = crypto.createHash('sha384').update(signPayload).digest('hex');

  const p24Payload = {
    merchantId: parseInt(merchantId),
    posId: parseInt(posId),
    sessionId,
    amount: p24Amount,
    currency,
    description: description || 'Darowizna dla Fundacji FHS',
    email,
    client: '', // Optional
    address: '', // Optional
    zip: '', // Optional
    city: '', // Optional
    country,
    language,
    urlReturn: `${req.headers.origin}/dziekujemy`,
    urlStatus: `${req.headers.origin}/api/payment-status`, // Webhook
    sign,
  };

  const baseUrl = isSandbox 
    ? 'https://sandbox.przelewy24.pl/api/v1' 
    : 'https://secure.przelewy24.pl/api/v1';

  try {
    const auth = Buffer.from(`${merchantId}:${apiKey}`).toString('base64');
    
    const response = await fetch(`${baseUrl}/transaction/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Basic ${auth}`
      },
      body: JSON.stringify(p24Payload)
    });

    const data = await response.json();

    if (data.data && data.data.token) {
      const redirectUrl = isSandbox
        ? `https://sandbox.przelewy24.pl/trnRequest/${data.data.token}`
        : `https://secure.przelewy24.pl/trnRequest/${data.data.token}`;
      
      return res.status(200).json({ redirectUrl, token: data.data.token });
    } else {
      console.error('P24 Error:', data);
      return res.status(400).json({ error: 'Failed to register transaction', detail: data });
    }
  } catch (err) {
    console.error('P24 Catch Error:', err);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
