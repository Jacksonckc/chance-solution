import React from 'react';
import jobs from '@/MockData/jobs.json';
import Button from '@/components/common/Button';

export default function JobsPage() {
  return (
    <div
      className='min-h-screen p-6 transition-colors duration-200'
      style={{ backgroundColor: 'var(--color-background)' }}>
      <div className='max-w-4xl mx-auto'>
        <div className='text-center mb-8'>
          <h1
            className='text-4xl font-bold mb-4 font-display'
            style={{ color: 'var(--color-text)' }}>
            Job Openings
          </h1>
          <p className='text-lg' style={{ color: 'var(--color-text-light)' }}>
            Join our team and help us build amazing solutions
          </p>
        </div>

        <div className='space-y-6'>
          {jobs.map((job, index) => (
            <div key={index} className='card p-6 hover:shadow-soft transition-all duration-200'>
              <h2 className='text-2xl font-semibold mb-3' style={{ color: 'var(--color-text)' }}>
                {job.title}
              </h2>
              <div className='space-y-2 mb-4'>
                <p style={{ color: 'var(--color-text-light)' }}>
                  <span className='font-medium'>Location:</span> {job.location}
                </p>
                <p style={{ color: 'var(--color-text-light)' }}>
                  <span className='font-medium'>Experience:</span> {job.experience}
                </p>
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
