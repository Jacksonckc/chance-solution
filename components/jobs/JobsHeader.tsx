import React from 'react';
import Text from '@/components/atoms/Text';
import { useTranslations } from '@/hooks/useTranslations';

interface JobsHeaderProps {
  title?: string;
  description?: string;
  className?: string;
}

export default function JobsHeader({ title, description, className = '' }: JobsHeaderProps) {
  const t = useTranslations();

  const displayTitle = title || (t('jobs.title') as string);
  const displayDescription = description || (t('jobs.subtitle') as string);

  return (
    <div className={`text-center mb-8 ${className}`}>
      <Text variant='h1' as='h1' className='mb-4'>
        {displayTitle}
      </Text>
      <Text variant='body1' as='p'>
        {displayDescription}
      </Text>
    </div>
  );
}
