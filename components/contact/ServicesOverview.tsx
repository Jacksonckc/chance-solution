import React from 'react';
import Text from '@/components/atoms/Text';
import { useTranslations } from '@/hooks/useTranslations';

interface ServiceItem {
  icon: string;
  title: string;
  description: string;
}

interface ServicesOverviewProps {
  title?: string;
  services: ServiceItem[];
}

export default function ServicesOverview({ title, services }: ServicesOverviewProps) {
  const t = useTranslations();
  const displayTitle = title || (t('contact.services.title') as string);

  return (
    <div className='card p-8 mb-12'>
      <Text variant='h2' as='h2' className='mb-6 text-center'>
        {displayTitle}
      </Text>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
        {services.map((service, index) => (
          <div key={index} className='text-center p-4'>
            <div className='text-2xl mb-2'>{service.icon}</div>
            <Text variant='h5' as='h5' className='mb-2'>
              {service.title}
            </Text>
            <Text variant='body3' style={{ color: 'var(--color-text-light)' }}>
              {service.description}
            </Text>
          </div>
        ))}
      </div>
    </div>
  );
}
