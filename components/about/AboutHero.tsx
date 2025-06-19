import React from 'react';
import Text from '@/components/atoms/Text';
import Button from '@/components/atoms/Button';
import { useTranslations } from '@/hooks/useTranslations';
import { useRouter } from 'next/router';

interface AboutHeroProps {
  className?: string;
}

export default function AboutHero({ className = '' }: AboutHeroProps) {
  const t = useTranslations();
  const router = useRouter();

  return (
    <div className={`text-center py-16 ${className}`}>
      <div className='max-w-4xl mx-auto px-6'>
        <Text variant='display1' as='h1' className='mb-6 font-bold'>
          {t('about.hero.title')}
        </Text>

        <Text
          variant='body1'
          as='p'
          className='mb-8 leading-relaxed max-w-3xl mx-auto'
          style={{ color: 'var(--color-text-light)' }}>
          {t('about.hero.subtitle')}
        </Text>

        <div className='flex flex-col sm:flex-row gap-4 justify-center'>
          <Button onClick={() => router.push('/contact')} className='btn-primary text-lg px-8 py-4'>
            {t('common.getInTouch') as string}
          </Button>

          <Button onClick={() => router.push('/jobs')} className='btn-secondary text-lg px-8 py-4'>
            {t('about.cta.joinTeam') as string}
          </Button>
        </div>
      </div>
    </div>
  );
}
