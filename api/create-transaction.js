import crypto from 'crypto';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { amount, description, email } = req.body;

  const merchantId = process.env.P24_MERCHANT_ID;
  const posId = process.env.P24_POS_ID || merchantId;
  const crc = process.env.P24_CRC_KEY;
  const isSandbox = process.env.P24_SANDBOX === 'true';

  if (!merchantId || !crc) {
    console.error('Missing P24 configuration');
    return res.status(500).json({ error: 'Missing Przelewy24 configuration' });
  }

  const sessionId = crypto.randomBytes(16).toString('hex');
  const p24Amount = Math.round(amount * 100);
  const currency = 'PLN';

  // Sign for form-based API: md5("sessionId|merchantId|amount|currency|crc")
  const signString = `${sessionId}|${merchantId}|${p24Amount}|${currency}|${crc}`;
  const sign = crypto.createHash('md5').update(signString).digest('hex');

  const params = new URLSearchParams({
    p24_merchant_id: merchantId,
    p24_pos_id: posId,
    p24_session_id: sessionId,
    p24_amount: String(p24Amount),
    p24_currency: currency,
    p24_description: description || 'Darowizna dla Fundacji FHS',
    p24_email: email,
    p24_country: 'PL',
    p24_language: 'pl',
    p24_url_return: `${req.headers.origin || 'https://fhspolska.pl'}/dziekujemy`,
    p24_url_status: `${req.headers.origin || 'https://fhspolska.pl'}/api/payment-status`,
    p24_sign: sign,
    p24_api_version: '3.2',
    p24_encoding: 'UTF-8',
  });

  const baseUrl = isSandbox
    ? 'https://sandbox.przelewy24.pl'
    : 'https://secure.przelewy24.pl';

  try {
    const response = await fetch(`${baseUrl}/trnRegister`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: params.toString(),
    });

    const text = await response.text();
    console.log('P24 response:', text);

    // Parse response: "error=0&token=XXX" or "error=errCode&errorMessage=..."
    const result = Object.fromEntries(new URLSearchParams(text));

    if (result.error === '0' && result.token) {
      const redirectUrl = `${baseUrl}/trnRequest/${result.token}`;

      return res.status(200).json({
        redirectUrl,
        token: result.token,
      });
    } else {
      console.error('P24 error:', text);
      return res.status(400).json({
        error: 'Płatność nie mogła zostać zarejestrowana',
        detail: result.errorMessage || text,
      });
    }
  } catch (err) {
    console.error('Fetch error:', err);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
