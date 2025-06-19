import React from 'react';
import Text from '@/components/atoms/Text';
import Button from '@/components/atoms/Button';

interface ContactMethodCardProps {
  icon: string;
  title: string;
  description: string;
  buttonText: string;
  buttonVariant: 'primary' | 'secondary';
  onClick: () => void;
}

export default function ContactMethodCard({
  icon,
  title,
  description,
  buttonText,
  buttonVariant,
  onClick
}: ContactMethodCardProps) {
  return (
    <div className='card p-8 text-center hover:shadow-soft transition-all duration-300 group'>
      <div className='text-4xl mb-4'>{icon}</div>
      <Text variant='h3' as='h3' className='mb-3'>
        {title}
      </Text>
      <Text variant='body2' as='p' className='mb-6' style={{ color: 'var(--color-text-light)' }}>
        {description}
      </Text>
      <Button
        className={`w-full ${buttonVariant === 'primary' ? 'btn-primary' : 'btn-secondary'}`}
        onClick={onClick}>
        {buttonText}
      </Button>
    </div>
  );
}
