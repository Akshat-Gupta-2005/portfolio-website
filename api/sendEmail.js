import { Resend } from 'resend';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, email, message } = req.body;
  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    await resend.emails.send({
      from: `${name} <onboarding@resend.dev>`,
      to: 'gemini.akshatgupta@gmail.com',
      subject: `Message from ${name} via Portfolio Website`,
      html: `<p><strong>From:</strong> ${email}</p><p>${message}</p>`
    });
    return res.status(200).json({ message: 'Email sent successfully!' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Error sending email', error });
  }
}
