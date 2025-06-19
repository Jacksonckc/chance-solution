import React from 'react';
import Text from '@/components/atoms/Text';
import Button from '@/components/atoms/Button';
import { useTranslations } from '@/hooks/useTranslations';

interface ServiceItem {
  icon: string;
  title: string;
  description: string;
  features: string[];
}

interface ServicesShowcaseProps {
  className?: string;
}

export default function ServicesShowcase({ className = '' }: ServicesShowcaseProps) {
  const t = useTranslations();

  const services: ServiceItem[] = [
    {
      icon: '🌐',
      title: t('about.services.webDevelopment.title') as string,
      description: t('about.services.webDevelopment.description') as string,
      features: t('about.services.webDevelopment.features') as string[]
    },
    {
      icon: '📱',
      title: t('about.services.mobileFirst.title') as string,
      description: t('about.services.mobileFirst.description') as string,
      features: t('about.services.mobileFirst.features') as string[]
    },
    {
      icon: '⚡',
      title: t('about.services.performance.title') as string,
      description: t('about.services.performance.description') as string,
      features: t('about.services.performance.features') as string[]
    },
    {
      icon: '🛠️',
      title: t('about.services.maintenance.title') as string,
      description: t('about.services.maintenance.description') as string,
      features: t('about.services.maintenance.features') as string[]
    }
  ];

  return (
    <div className={`py-16 ${className}`}>
      <div className='max-w-6xl mx-auto px-6'>
        <div className='text-center mb-16'>
          <Text variant='h1' as='h2' className='mb-6'>
            {t('about.services.title')}
          </Text>
          <Text
            variant='body1'
            as='p'
            className='max-w-3xl mx-auto'
            style={{ color: 'var(--color-text-light)' }}>
            {t('about.services.subtitle')}
          </Text>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12'>
          {services.map((service, index) => (
            <div key={index} className='card p-8 hover:shadow-soft transition-all duration-300'>
              <div className='flex items-start gap-4 mb-6'>
                <div className='text-4xl'>{service.icon}</div>
                <div className='flex-1'>
                  <Text variant='h3' as='h3' className='mb-2'>
                    {service.title}
                  </Text>
                  <Text variant='body2' style={{ color: 'var(--color-text-light)' }}>
                    {service.description}
                  </Text>
                </div>
              </div>

              <ul className='space-y-2'>
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className='flex items-center gap-2'>
                    <span style={{ color: 'var(--color-success)' }}>✓</span>
                    <Text variant='body3' style={{ color: 'var(--color-text)' }}>
                      {feature}
                    </Text>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className='text-center'>
          <Button
            className='btn-primary text-lg px-8 py-4'
            onClick={() => (window.location.href = '/contact')}>
            {t('common.startProject') as string}
          </Button>
        </div>
      </div>
    </div>
  );
}
