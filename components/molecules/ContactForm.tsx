import React, { useState } from 'react';
import Text from '@/components/atoms/Text';
import Button from '@/components/atoms/Button';
import FormInput from '@/components/molecules/FormInput';
import FormTextarea from '@/components/molecules/FormTextarea';
import FormStatusMessage from '@/components/molecules/FormStatusMessage';

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface ContactFormProps {
  onSubmit?: (data: ContactFormData) => void;
  className?: string;
}

export default function ContactForm({ onSubmit, className = '' }: ContactFormProps) {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Call the onSubmit prop if provided
      if (onSubmit) {
        await onSubmit(formData);
      } else {
        // Submit to API route
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
        });

        if (!response.ok) {
          throw new Error('Failed to submit form');
        }

        const result = await response.json();
        if (!result.success) {
          throw new Error(result.message || 'Failed to submit form');
        }
      }

      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={`card p-8 ${className}`}>
      <Text variant='h3' as='h3' className='mb-6 text-center'>
        Send us a Message
      </Text>

      <form onSubmit={handleSubmit} className='space-y-6'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          <FormInput
            id='name'
            name='name'
            label='Name'
            type='text'
            value={formData.name}
            onChange={handleInputChange}
            placeholder='Your name'
            required
          />

          <FormInput
            id='email'
            name='email'
            label='Email'
            type='email'
            value={formData.email}
            onChange={handleInputChange}
            placeholder='your.email@example.com'
            required
          />
        </div>

        <FormInput
          id='subject'
          name='subject'
          label='Subject'
          type='text'
          value={formData.subject}
          onChange={handleInputChange}
          placeholder="What's this about?"
          required
        />

        <FormTextarea
          id='message'
          name='message'
          label='Message'
          value={formData.message}
          onChange={handleInputChange}
          placeholder='Tell us about your project or inquiry...'
          required
        />

        <div className='text-center'>
          <Button type='submit' className='btn-primary px-8 py-3' disabled={isSubmitting}>
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </Button>
        </div>

        {submitStatus === 'success' && (
          <FormStatusMessage
            type='success'
            message='Thank you! Your message has been sent successfully.'
          />
        )}

        {submitStatus === 'error' && (
          <FormStatusMessage
            type='error'
            message='Sorry, there was an error sending your message. Please try again or contact us directly.'
          />
        )}
      </form>
    </div>
  );
}
