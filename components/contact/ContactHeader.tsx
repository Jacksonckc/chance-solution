import React from 'react';
import Text from '@/components/atoms/Text';
import { useTranslations } from '@/hooks/useTranslations';

interface ContactHeaderProps {
  title?: string;
  description?: string;
}

export default function ContactHeader({ title, description }: ContactHeaderProps) {
  const t = useTranslations();

  const displayTitle = title || t('contact.title');
  const displayDescription = description || t('contact.description');

  return (
    <div className='text-center mb-12'>
      <Text variant='display2' as='h1' className='mb-4'>
        {displayTitle}
      </Text>
      <Text
        variant='body1'
        as='p'
        className='max-w-2xl mx-auto'
        style={{ color: 'var(--color-text-light)' }}>
        {displayDescription}
      </Text>
    </div>
  );
}
