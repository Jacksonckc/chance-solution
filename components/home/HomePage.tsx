import React from 'react';
import Button from '../atoms/Button';
import Text from '../atoms/Text';
import { useTranslations } from '@/hooks/useTranslations';
import { useRouter } from 'next/router';

export default function HomePage() {
  const t = useTranslations();
  const router = useRouter();

  return (
    <div className='flex items-center justify-center py-8 px-4'>
      <div className='text-center max-w-4xl mx-auto'>
        <Text variant='display1' as='h1' className='mb-6 font-bold'>
          {t('home.title') as string}
        </Text>

        <Text
          variant='body1'
          as='p'
          className='mb-8 leading-relaxed'
          style={{ color: 'var(--color-text-light)' }}>
          {t('home.subtitle') as string}
        </Text>

        <div className='flex flex-col sm:flex-row gap-4 justify-center mb-12'>
          <Button onClick={() => router.push('/about')} className='btn-primary text-lg px-8 py-4'>
            {t('home.cta') as string}
          </Button>

          <Button
            onClick={() => router.push('/contact')}
            className='btn-secondary text-lg px-8 py-4'>
            {t('common.learnMore') as string}
          </Button>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          <div className='card p-6 text-center'>
            <div className='text-4xl mb-4'>⚡</div>
            <Text variant='h3' as='h3' className='mb-2'>
              {t('home.features.fastReliable.title') as string}
            </Text>
            <Text variant='body2' style={{ color: 'var(--color-text-light)' }}>
              {t('home.features.fastReliable.description') as string}
            </Text>
          </div>

          <div className='card p-6 text-center'>
            <div className='text-4xl mb-4'>🎨</div>
            <Text variant='h3' as='h3' className='mb-2'>
              {t('home.features.beautifulUI.title') as string}
            </Text>
            <Text variant='body2' style={{ color: 'var(--color-text-light)' }}>
              {t('home.features.beautifulUI.description') as string}
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
}
