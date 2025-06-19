import React from 'react';
import JobsHeader from './JobsHeader';
import JobCard from './JobCard';
import Text from '@/components/atoms/Text';
import { useTranslations } from '@/hooks/useTranslations';

interface Job {
  title: string;
  location: string;
  experience: string;
}

interface JobsPageProps {
  jobs: Job[];
  onJobApply?: (jobTitle: string) => void;
  className?: string;
}

export default function JobsPage({
  jobs,
  onJobApply = (jobTitle: string) => console.log(`Applying for ${jobTitle}`),
  className = ''
}: JobsPageProps) {
  const t = useTranslations();

  return (
    <div
      className={`p-6 transition-colors duration-200 ${className}`}
      style={{ backgroundColor: 'var(--color-background)' }}>
      <div className='max-w-4xl mx-auto'>
        <JobsHeader />

        <div className='space-y-6'>
          {jobs.length > 0 ? (
            jobs.map((job, index) => <JobCard key={index} job={job} onApply={onJobApply} />)
          ) : (
            <div className='card p-8 text-center'>
              <Text variant='h3' as='h3' className='mb-4'>
                {t('jobs.noJobs') as string}
              </Text>
              <Text variant='body2' style={{ color: 'var(--color-text-light)' }}>
                {t('jobs.checkBack') as string}
              </Text>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
