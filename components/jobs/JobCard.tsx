import React from 'react';
import Text from '@/components/atoms/Text';
import Button from '@/components/atoms/Button';
import { useTranslations } from '@/hooks/useTranslations';

interface Job {
  title: string;
  location: string;
  experience: string;
}

interface JobCardProps {
  job: Job;
  onApply: (jobTitle: string) => void;
  className?: string;
}

export default function JobCard({ job, onApply, className = '' }: JobCardProps) {
  const t = useTranslations();

  return (
    <div className={`card p-6 hover:shadow-soft transition-all duration-200 ${className}`}>
      <Text variant='h2' as='h2' className='mb-3'>
        {job.title}
      </Text>
      <div className='space-y-2 mb-4'>
        <Text variant='body2' style={{ color: 'var(--color-text-light)' }}>
          <span className='font-medium'>{t('jobs.location')}:</span> {job.location}
        </Text>
        <Text variant='body2' style={{ color: 'var(--color-text-light)' }}>
          <span className='font-medium'>{t('jobs.experience')}:</span> {job.experience}
        </Text>
      </div>
      <Button className='btn-primary' onClick={() => onApply(job.title)}>
        {t('jobs.applyNow') as string}
      </Button>
    </div>
  );
}
