import React from 'react';
import Text from '@/components/atoms/Text';

interface ContactHeaderProps {
  title?: string;
  description?: string;
}

export default function ContactHeader({
  title = 'Get in Touch',
  description = "Ready to transform your business with powerful web solutions? Let's discuss how Chan'ce Solution can help you succeed."
}: ContactHeaderProps) {
  return (
    <div className='text-center mb-12'>
      <Text variant='display2' as='h1' className='mb-4'>
        {title}
      </Text>
      <Text
        variant='body1'
        as='p'
        className='max-w-2xl mx-auto'
        style={{ color: 'var(--color-text-light)' }}>
        {description}
      </Text>
    </div>
  );
}
