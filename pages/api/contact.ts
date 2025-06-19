import type { NextApiRequest, NextApiResponse } from 'next';

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { name, email, subject, message }: ContactFormData = req.body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: 'Invalid email format' });
    }

    // For now, we'll just log the contact form data
    // In a real implementation, you would send an email here
    console.log('Contact Form Submission:', {
      name,
      email,
      subject,
      message,
      timestamp: new Date().toISOString()
    });

    // TODO: Implement actual email sending
    // You can use services like:
    // - SendGrid (recommended for production)
    // - Nodemailer with Gmail SMTP
    // - Resend.com
    // - EmailJS (client-side)

    res.status(200).json({
      message: 'Contact form submitted successfully',
      success: true
    });
  } catch (error) {
    console.error('Contact form error:', error);
    res.status(500).json({
      message: 'Internal server error',
      success: false
    });
  }
}
