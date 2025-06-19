import React from 'react';
import Text from '@/components/atoms/Text';
import { useTranslations } from '@/hooks/useTranslations';

interface ValueItem {
  icon: string;
  title: string;
  description: string;
}

interface MissionValuesProps {
  className?: string;
}

export default function MissionValues({ className = '' }: MissionValuesProps) {
  const t = useTranslations();

  const values: ValueItem[] = [
    {
      icon: '🚀',
      title: t('about.values.innovation.title') as string,
      description: t('about.values.innovation.description') as string
    },
    {
      icon: '🤝',
      title: t('about.values.partnership.title') as string,
      description: t('about.values.partnership.description') as string
    },
    {
      icon: '⭐',
      title: t('about.values.excellence.title') as string,
      description: t('about.values.excellence.description') as string
    },
    {
      icon: '📈',
      title: t('about.values.growth.title') as string,
      description: t('about.values.growth.description') as string
    }
  ];

  return (
    <div className={`py-16 ${className}`}>
      <div className='max-w-6xl mx-auto px-6'>
        {/* Mission Section */}
        <div className='text-center mb-16'>
          <Text variant='h1' as='h2' className='mb-6'>
            {t('about.mission.title')}
          </Text>
          <Text
            variant='body1'
            as='p'
            className='max-w-4xl mx-auto leading-relaxed'
            style={{ color: 'var(--color-text-light)' }}>
            {t('about.mission.description')}
          </Text>
        </div>

        {/* Values Section */}
        <div className='text-center mb-12'>
          <Text variant='h2' as='h3' className='mb-6'>
            {t('about.values.title')}
          </Text>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
          {values.map((value, index) => (
            <div
              key={index}
              className='card p-8 text-center hover:shadow-soft transition-all duration-300'>
              <div className='text-4xl mb-4'>{value.icon}</div>
              <Text variant='h3' as='h4' className='mb-3'>
                {value.title}
              </Text>
              <Text variant='body2' style={{ color: 'var(--color-text-light)' }}>
                {value.description}
              </Text>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
