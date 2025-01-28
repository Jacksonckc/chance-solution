import React from 'react';
import jobs from '@/MockData/jobs.json';

export default function JobsPage() {
  return (
    <div className='min-h-screen bg-gray-100 p-6'>
      <div className='max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6'>
        <h1 className='text-3xl font-bold mb-4'>Job Openings</h1>
        <div className='space-y-4'>
          {jobs.map((job, index) => (
            <div
              key={index}
              className='p-4 border rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200'>
              <h2 className='text-2xl font-semibold'>{job.title}</h2>
              <p className='text-gray-700'>Location: {job.location}</p>
              <p className='text-gray-700'>Experience: {job.experience}</p>
              <button className='mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-200'>
                Apply Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
