import React from 'react';
import ContactMethodCard from './ContactMethodCard';
import { useTranslations } from '@/hooks/useTranslations';

interface ContactMethodsSectionProps {
  email: string;
  linkedInUrl: string;
}

export default function ContactMethodsSection({ email, linkedInUrl }: ContactMethodsSectionProps) {
  const t = useTranslations();

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
        title={t('contact.methods.email') as string}
        description={t('contact.methods.sendEmail') as string}
        buttonText={email}
        buttonVariant='primary'
        onClick={handleEmailClick}
      />

      <ContactMethodCard
        icon='💼'
        title={t('contact.methods.linkedin') as string}
        description={t('contact.methods.connectLinkedin') as string}
        buttonText={t('contact.methods.connectLinkedin') as string}
        buttonVariant='secondary'
        onClick={handleLinkedInClick}
      />
    </div>
  );
}
