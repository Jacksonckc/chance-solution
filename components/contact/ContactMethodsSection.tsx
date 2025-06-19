import React from 'react';
import ContactMethodCard from './ContactMethodCard';

interface ContactMethodsSectionProps {
  email: string;
  linkedInUrl: string;
}

export default function ContactMethodsSection({ email, linkedInUrl }: ContactMethodsSectionProps) {
  const handleEmailClick = () => {
    window.location.href = `mailto:${email}`;
  };

  const handleLinkedInClick = () => {
    window.open(linkedInUrl, '_blank');
  };

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mb-12'>
      <ContactMethodCard
        icon='📧'
        title='Email Us'
        description="Send us a message and we'll get back to you within 24 hours."
        buttonText={email}
        buttonVariant='primary'
        onClick={handleEmailClick}
      />

      <ContactMethodCard
        icon='💼'
        title='Connect on LinkedIn'
        description='Follow our company page for updates and professional networking.'
        buttonText='Visit LinkedIn'
        buttonVariant='secondary'
        onClick={handleLinkedInClick}
      />
    </div>
  );
}
