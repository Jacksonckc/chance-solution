import React from 'react';
import Text from '@/components/atoms/Text';
import Button from '@/components/atoms/Button';

interface AboutHeroProps {
  className?: string;
}

export default function AboutHero({ className = '' }: AboutHeroProps) {
  return (
    <div className={`text-center py-16 ${className}`}>
      <div className='max-w-4xl mx-auto px-6'>
        <Text variant='display1' as='h1' className='mb-6 font-bold'>
          About <span style={{ color: 'var(--color-primary)' }}>Chan&apos;ce Solution</span>
        </Text>

        <Text
          variant='body1'
          as='p'
          className='mb-8 leading-relaxed max-w-3xl mx-auto'
          style={{ color: 'var(--color-text-light)' }}>
          We are a passionate web development company dedicated to transforming businesses through
          innovative digital solutions. Our mission is to create powerful, user-friendly
          applications that drive growth and success for small businesses.
        </Text>

        <div className='flex flex-col sm:flex-row gap-4 justify-center'>
          <Button
            className='btn-primary text-lg px-8 py-4'
            onClick={() => (window.location.href = '/contact')}>
            Get in Touch
          </Button>

          <Button
            className='btn-secondary text-lg px-8 py-4'
            onClick={() => (window.location.href = '/jobs')}>
            Join Our Team
          </Button>
        </div>
      </div>
    </div>
  );
}
