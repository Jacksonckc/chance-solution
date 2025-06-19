import React from 'react';
import { useTranslations } from '@/hooks/useTranslations';
import Text from '@/components/atoms/Text';
import Button from '@/components/atoms/Button';

export default function TranslatedExample() {
  const t = useTranslations();

  return (
    <div className='card p-8'>
      <Text variant='h2' className='mb-4'>
        {t('home.title')}
      </Text>

      <Text variant='body1' className='mb-6' style={{ color: 'var(--color-text-light)' }}>
        {t('home.subtitle')}
      </Text>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-8'>
        <div className='text-center'>
          <div className='text-4xl mb-4'>🎥</div>
          <Text variant='h3' className='mb-2'>
            {t('home.features.videoDownloads.title')}
          </Text>
          <Text variant='body2' style={{ color: 'var(--color-text-light)' }}>
            {t('home.features.videoDownloads.description')}
          </Text>
        </div>

        <div className='text-center'>
          <div className='text-4xl mb-4'>⚡</div>
          <Text variant='h3' className='mb-2'>
            {t('home.features.fastReliable.title')}
          </Text>
          <Text variant='body2' style={{ color: 'var(--color-text-light)' }}>
            {t('home.features.fastReliable.description')}
          </Text>
        </div>

        <div className='text-center'>
          <div className='text-4xl mb-4'>🎨</div>
          <Text variant='h3' className='mb-2'>
            {t('home.features.beautifulUI.title')}
          </Text>
          <Text variant='body2' style={{ color: 'var(--color-text-light)' }}>
            {t('home.features.beautifulUI.description')}
          </Text>
        </div>
      </div>

      <div className='flex flex-col sm:flex-row gap-4 justify-center'>
        <Button className='btn-primary'>{t('common.learnMore') as string}</Button>
        <Button className='btn-secondary'>{t('common.getInTouch') as string}</Button>
      </div>
    </div>
  );
}
