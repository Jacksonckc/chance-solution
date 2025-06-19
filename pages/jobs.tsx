import React from 'react';
import jobs from '@/MockData/jobs.json';
import Button from '@/components/common/Button';
import Text from '@/components/common/Text';

export default function JobsPage() {
  return (
    <div
      className='min-h-screen p-6 transition-colors duration-200'
      style={{ backgroundColor: 'var(--color-background)' }}>
      <div className='max-w-4xl mx-auto'>
        <div className='text-center mb-8'>
          <Text variant='h1' as='h1' className='mb-4'>
            Job Openings
          </Text>
          <Text variant='body1' as='p'>
            Join our team and help us build amazing solutions
          </Text>
        </div>

        <div className='space-y-6'>
          {jobs.map((job, index) => (
            <div key={index} className='card p-6 hover:shadow-soft transition-all duration-200'>
              <Text variant='h2' as='h2' className='mb-3'>
                {job.title}
              </Text>
              <div className='space-y-2 mb-4'>
                <Text variant='body2' style={{ color: 'var(--color-text-light)' }}>
                  <span className='font-medium'>Location:</span> {job.location}
                </Text>
                <Text variant='body2' style={{ color: 'var(--color-text-light)' }}>
                  <span className='font-medium'>Experience:</span> {job.experience}
                </Text>
              </div>
              <Button
                className='btn-primary'
                onClick={() => {
                  // Handle job application
                  console.log(`Applying for ${job.title}`);
                }}>
                Apply Now
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
