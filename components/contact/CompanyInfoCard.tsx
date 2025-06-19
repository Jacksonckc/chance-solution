import React from 'react';
import Text from '@/components/atoms/Text';
import { useTranslations } from '@/hooks/useTranslations';

interface InfoItem {
  icon: string;
  title: string;
  description: string;
}

interface CompanyInfoCardProps {
  title?: string;
  items: InfoItem[];
}

export default function CompanyInfoCard({ title, items }: CompanyInfoCardProps) {
  const t = useTranslations();
  const displayTitle = title || (t('contact.company.title') as string);

  return (
    <div className='card p-8 mb-12'>
      <Text variant='h2' as='h2' className='mb-6 text-center'>
        {displayTitle}
      </Text>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
        {items.map((item, index) => (
          <div key={index} className='text-center'>
            <div className='text-3xl mb-3'>{item.icon}</div>
            <Text variant='h4' as='h4' className='mb-2'>
              {item.title}
            </Text>
            <Text variant='body2' style={{ color: 'var(--color-text-light)' }}>
              {item.description}
            </Text>
          </div>
        ))}
      </div>
    </div>
  );
}
