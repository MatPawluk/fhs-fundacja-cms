export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Przelewy24 sends transaction status updates here.
  // We need to verify the notification and update our records if needed.
  // For a simple donation, we can just acknowledge the request.
  
  console.log('Received P24 status update:', req.body);

  // Verification logic would go here (SHA384 sign verification)
  // See: https://www.przelewy24.pl/support

  return res.status(200).send('OK');
}
