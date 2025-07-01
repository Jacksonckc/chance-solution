import React from 'react';
import Text from '@/components/atoms/Text';
import Button from '@/components/atoms/Button';
import { useTranslations } from '@/hooks/useTranslations';

interface AboutCTAProps {
  className?: string;
}

export default function AboutCTA({ className = '' }: AboutCTAProps) {
  const t = useTranslations();

  return (
    <div className={`py-16 ${className}`}>
      <div className='max-w-4xl mx-auto px-6 text-center'>
        <div className='card p-12'>
          <Text variant='h1' as='h2' className='mb-6'>
            {t('about.cta.title')}
          </Text>

          <Text
            variant='body1'
            as='p'
            className='mb-8 max-w-2xl mx-auto'
            style={{ color: 'var(--color-text-light)' }}>
            {t('about.cta.subtitle')}
          </Text>

          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Button
              className='btn-primary text-lg px-8 py-4'
              onClick={() => (window.location.href = '/contact')}>
              {t('common.startProject') as string}
            </Button>
          </div>

          <div className='mt-8 pt-8 border-t' style={{ borderColor: 'var(--color-border)' }}>
            <Text variant='body2' as='p' style={{ color: 'var(--color-text-light)' }}>
              💼 {t('about.cta.joinTeam')}{' '}
              <button
                onClick={() => (window.location.href = '/jobs')}
                className='underline hover:no-underline'
                style={{ color: 'var(--color-primary)' }}>
                current openings
              </button>
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
}
