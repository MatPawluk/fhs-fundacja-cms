import crypto from 'crypto';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { amount, description, email } = req.body;

  const merchantId = process.env.P24_MERCHANT_ID;
  const posId = process.env.P24_POS_ID || merchantId;
  const crc = process.env.P24_CRC_KEY;
  const apiKey = process.env.P24_API_KEY;
  const isSandbox = process.env.P24_SANDBOX === 'true';

  // 🔍 DEBUG ENV
  console.log('--- ENV DEBUG ---');
  console.log({
    merchantId,
    posId,
    crc,
    apiKey,
    isSandbox
  });

  if (!merchantId || !crc || !apiKey) {
    console.error('❌ BRAK ENV!');
    return res.status(500).json({ error: 'Missing Przelewy24 configuration' });
  }

  const sessionId = crypto.randomBytes(16).toString('hex');
  const p24Amount = Math.round(amount * 100);
  const currency = 'PLN';
  const country = 'PL';
  const language = 'pl';

  // 🔐 SIGN (REST API v1 requires SHA-384 and JSON structure)
  const mIdNum = parseInt(merchantId);
  const p24AmountNum = parseInt(p24Amount);
  
  // Podpis generowany ściśle używając native JSON.stringify aby uniknąć przerw w składni
  const signPayloadObj = {
    sessionId: sessionId,
    merchantId: mIdNum,
    amount: p24AmountNum,
    currency: currency,
    crc: crc
  };
  const sign = crypto.createHash('sha384').update(JSON.stringify(signPayloadObj)).digest('hex');

  console.log('--- SIGN DEBUG ---');
  console.log('Sign Payload:', JSON.stringify(signPayloadObj));
  console.log('Generated sign:', sign);

  const p24Payload = {
    merchantId: mIdNum,
    posId: mIdNum, // Default POS ID to Merchant ID
    sessionId,
    amount: p24AmountNum,
    currency,
    description: description || 'Darowizna dla Fundacji FHS',
    email,
    country,
    language,
    urlReturn: isSandbox ? `${req.headers.origin}/dziekujemy` : 'https://www.fhs-strona-fundacji.pl/dziekujemy',
    urlStatus: isSandbox ? `${req.headers.origin}/api/payment-status` : 'https://www.fhs-strona-fundacji.pl/api/payment-status',
    sign,
  };

  console.log('--- PAYLOAD DEBUG ---');
  console.log(JSON.stringify(p24Payload, null, 2));

  const baseUrl = isSandbox
    ? 'https://sandbox.przelewy24.pl/api/v1'
    : 'https://secure.przelewy24.pl/api/v1';

  try {
    // 🔐 AUTH DEBUG
    const authString = `${merchantId}:${apiKey}`;
    const auth = Buffer.from(authString).toString('base64');

    console.log('--- AUTH DEBUG ---');
    console.log('Auth string:', authString);
    console.log('Auth base64:', auth);

    const response = await fetch(`${baseUrl}/transaction/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Basic ${auth}`,
      },
      body: JSON.stringify(p24Payload),
    });

    const text = await response.text();

    console.log('--- RAW RESPONSE ---');
    console.log(text);

    let data;
    try {
      data = JSON.parse(text);
    } catch (e) {
      console.error('❌ JSON PARSE ERROR');
      return res.status(500).json({ error: 'Invalid JSON response from P24' });
    }

    if (data.data && data.data.token) {
      const redirectUrl = isSandbox
        ? `https://sandbox.przelewy24.pl/trnRequest/${data.data.token}`
        : `https://secure.przelewy24.pl/trnRequest/${data.data.token}`;

      console.log('✅ SUCCESS - TOKEN:', data.data.token);

      return res.status(200).json({
        redirectUrl,
        token: data.data.token,
      });
    } else {
      console.error('❌ P24 ERROR:', JSON.stringify(data, null, 2));

      return res.status(400).json({
        error: 'Płatność nie mogła zostać zarejestrowana',
        detail: data.error || data.message || 'Unknown error',
        fullError: data,
      });
    }
  } catch (err) {
    console.error('❌ FETCH ERROR:', err);
    return res.status(500).json({ error: 'Internal server error' });
  }
}