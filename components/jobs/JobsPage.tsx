import React from 'react';
import JobsHeader from './JobsHeader';
import JobCard from './JobCard';

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
  return (
    <div
      className={`p-6 transition-colors duration-200 ${className}`}
      style={{ backgroundColor: 'var(--color-background)' }}>
      <div className='max-w-4xl mx-auto'>
        <JobsHeader />

        <div className='space-y-6'>
          {jobs.map((job, index) => (
            <JobCard key={index} job={job} onApply={onJobApply} />
          ))}
        </div>
      </div>
    </div>
  );
}
