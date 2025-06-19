# Email Integration Guide

This guide explains how to implement email functionality for the contact form in your Next.js application.

## Current Implementation

The contact form currently:

1. ✅ Collects user input (name, email, subject, message)
2. ✅ Validates form data
3. ✅ Submits to `/api/contact` endpoint
4. ✅ Logs form data to console
5. ❌ **Needs email service integration**

## Email Service Options

### 1. SendGrid (Recommended for Production)

**Pros:** Reliable, scalable, good deliverability, free tier available
**Cons:** Requires API key setup

**Setup:**

```bash
npm install @sendgrid/mail
```

**Environment Variables:**

```env
SENDGRID_API_KEY=your_sendgrid_api_key
```

**Implementation:**

```typescript
// pages/api/contact.ts
import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

// In your handler:
const msg = {
  to: 'jackson858216047@gmail.com',
  from: 'noreply@yourdomain.com', // Must be verified
  subject: `Contact Form: ${subject}`,
  text: `
    Name: ${name}
    Email: ${email}
    Subject: ${subject}

    Message:
    ${message}
  `,
  html: `
    <h2>New Contact Form Submission</h2>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Subject:</strong> ${subject}</p>
    <p><strong>Message:</strong></p>
    <p>${message.replace(/\n/g, '<br>')}</p>
  `,
};

await sgMail.send(msg);
```

### 2. Nodemailer with Gmail SMTP

**Pros:** Free, works with Gmail
**Cons:** Requires app password, less reliable than SendGrid

**Setup:**

```bash
npm install nodemailer
```

**Environment Variables:**

```env
GMAIL_USER=your_email@gmail.com
GMAIL_APP_PASSWORD=your_app_password
```

**Implementation:**

```typescript
// pages/api/contact.ts
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransporter({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

// In your handler:
const mailOptions = {
  from: process.env.GMAIL_USER,
  to: 'jackson858216047@gmail.com',
  subject: `Contact Form: ${subject}`,
  text: `
    Name: ${name}
    Email: ${email}
    Subject: ${subject}

    Message:
    ${message}
  `,
  html: `
    <h2>New Contact Form Submission</h2>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Subject:</strong> ${subject}</p>
    <p><strong>Message:</strong></p>
    <p>${message.replace(/\n/g, '<br>')}</p>
  `,
};

await transporter.sendMail(mailOptions);
```

### 3. Resend.com

**Pros:** Modern API, good deliverability, developer-friendly
**Cons:** Newer service

**Setup:**

```bash
npm install resend
```

**Environment Variables:**

```env
RESEND_API_KEY=your_resend_api_key
```

**Implementation:**

```typescript
// pages/api/contact.ts
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

// In your handler:
await resend.emails.send({
  from: 'noreply@yourdomain.com',
  to: 'jackson858216047@gmail.com',
  subject: `Contact Form: ${subject}`,
  html: `
    <h2>New Contact Form Submission</h2>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Subject:</strong> ${subject}</p>
    <p><strong>Message:</strong></p>
    <p>${message.replace(/\n/g, '<br>')}</p>
  `,
});
```

### 4. EmailJS (Client-side)

**Pros:** No server setup required, works with Gmail
**Cons:** Exposes email credentials in frontend, less secure

**Setup:**

```bash
npm install @emailjs/browser
```

**Implementation:**

```typescript
// components/molecules/ContactForm.tsx
import emailjs from '@emailjs/browser';

// In handleSubmit:
await emailjs.send(
  'YOUR_SERVICE_ID',
  'YOUR_TEMPLATE_ID',
  {
    from_name: formData.name,
    from_email: formData.email,
    subject: formData.subject,
    message: formData.message,
    to_email: 'jackson858216047@gmail.com',
  },
  'YOUR_PUBLIC_KEY'
);
```

## SMS Integration Options

### 1. Twilio

**Pros:** Reliable, widely used
**Cons:** Paid service, requires phone number

**Setup:**

```bash
npm install twilio
```

**Environment Variables:**

```env
TWILIO_ACCOUNT_SID=your_account_sid
TWILIO_AUTH_TOKEN=your_auth_token
TWILIO_PHONE_NUMBER=your_twilio_number
```

**Implementation:**

```typescript
// pages/api/contact.ts
import twilio from 'twilio';

const client = twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

// In your handler:
await client.messages.create({
  body: `New contact form submission from ${name} (${email}): ${message}`,
  from: process.env.TWILIO_PHONE_NUMBER,
  to: '+1234567890', // Your phone number
});
```

### 2. Email-to-SMS Gateways

**Pros:** Free, works with existing email setup
**Cons:** Limited carriers, not all numbers supported

**Implementation:**

```typescript
// Send email to SMS gateway
const smsEmail = '1234567890@txt.att.net'; // AT&T example
// Add this as a CC or BCC recipient in your email
```

## Recommended Setup for Production

1. **Primary:** SendGrid for email
2. **Backup:** Twilio for SMS notifications
3. **Environment:** Use environment variables for all API keys
4. **Rate Limiting:** Implement rate limiting to prevent spam
5. **Validation:** Add CAPTCHA or honeypot fields

## Quick Start with SendGrid

1. Sign up for SendGrid (free tier available)
2. Verify your sender domain
3. Get API key
4. Install package: `npm install @sendgrid/mail`
5. Add environment variable: `SENDGRID_API_KEY=your_key`
6. Update `/pages/api/contact.ts` with SendGrid implementation
7. Test the form

## Security Considerations

- ✅ Validate all inputs
- ✅ Use environment variables for API keys
- ✅ Implement rate limiting
- ✅ Add CAPTCHA for production
- ✅ Sanitize HTML content
- ❌ Don't expose API keys in frontend
- ❌ Don't trust client-side validation only

## Testing

Test your email integration with:

- Valid form submissions
- Invalid email formats
- Missing required fields
- Rate limiting
- Error handling
