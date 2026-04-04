import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { name, email, topic, message } = req.body;

  // Basic validation
  if (!name || !email || !message) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  try {
    // Create reusable transporter object using SMTP transport
    let transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: process.env.SMTP_PORT || 587,
      secure: process.env.SMTP_PORT == 465, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Email to the foundation (receiving the inquiry)
    let mailOptions = {
      from: `"${name}" <${process.env.SMTP_USER}>`, // Send through our auth user to avoid spam filters
      replyTo: email, // If they click "reply", it goes to the user who filled the form
      to: process.env.SMTP_USER, // Send it to the foundation's inbox
      subject: `Nowa wiadomość ze strony: ${topic || 'Brak tematu'}`,
      text: `Dostałeś nową wiadomość z formularza kontaktowego na stronie FHS Foundation.\n\nOd: ${name} (${email})\nTemat: ${topic}\n\nWiadomość:\n${message}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
          <h2 style="color: #94c43d;">Nowa wiadomość ze strony FHS Foundation</h2>
          <p><strong>Od:</strong> ${name} (<a href="mailto:${email}">${email}</a>)</p>
          <p><strong>Temat:</strong> ${topic || 'Brak tematu'}</p>
          <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />
          <p><strong>Wiadomość:</strong></p>
          <p style="white-space: pre-wrap; background: #f9f9f9; padding: 15px; border-radius: 5px;">${message}</p>
        </div>
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return res.status(200).json({ message: 'Message sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ message: 'Failed to send email', error: error.message });
  }
}
