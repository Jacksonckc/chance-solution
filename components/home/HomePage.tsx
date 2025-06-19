import React from 'react';
import Button from '../atoms/Button';
import Text from '../atoms/Text';
import { useTranslations } from '@/hooks/useTranslations';
import { useRouter } from 'next/router';

export default function HomePage() {
  const t = useTranslations();
  const router = useRouter();

  return (
    <div className='h-full flex items-center justify-center'>
      <div className='text-center max-w-4xl mx-auto px-6'>
        <Text variant='display1' as='h1' className='mb-6 font-bold'>
          {t('home.title')}
        </Text>

        <Text
          variant='body1'
          as='p'
          className='mb-8 leading-relaxed'
          style={{ color: 'var(--color-text-light)' }}>
          {t('home.subtitle')}
        </Text>

        <div className='flex flex-col sm:flex-row gap-4 justify-center'>
          <Button
            className='btn-primary text-lg px-8 py-4'
            onClick={() => (window.location.href = '/downloadVideo')}>
            {t('common.tryTools')}
          </Button>

          <Button onClick={() => router.push('/about')} className='btn-primary text-lg px-8 py-4'>
            {t('home.cta') as string}
          </Button>

          <Button
            onClick={() => router.push('/contact')}
            className='btn-secondary text-lg px-8 py-4'>
            {t('home.learnMore') as string}
          </Button>
        </div>

        <div className='mt-12 grid grid-cols-1 md:grid-cols-3 gap-6'>
          <div className='card p-6 text-center'>
            <div className='text-4xl mb-4'>🎥</div>
            <Text variant='h3' as='h3' className='mb-2'>
              {t('home.features.videoDownloads.title')}
            </Text>
            <Text variant='body2' style={{ color: 'var(--color-text-light)' }}>
              {t('home.features.videoDownloads.description')}
            </Text>
          </div>

          <div className='card p-6 text-center'>
            <div className='text-4xl mb-4'>⚡</div>
            <Text variant='h3' as='h3' className='mb-2'>
              {t('home.features.fastReliable.title')}
            </Text>
            <Text variant='body2' style={{ color: 'var(--color-text-light)' }}>
              {t('home.features.fastReliable.description')}
            </Text>
          </div>

          <div className='card p-6 text-center'>
            <div className='text-4xl mb-4'>🎨</div>
            <Text variant='h3' as='h3' className='mb-2'>
              {t('home.features.beautifulUI.title')}
            </Text>
            <Text variant='body2' style={{ color: 'var(--color-text-light)' }}>
              {t('home.features.beautifulUI.description')}
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
}
