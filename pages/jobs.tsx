import React from 'react';
import jobs from '@/MockData/jobs.json';
import JobsPage from '@/components/jobs/JobsPage';

export default function Jobs() {
  return <JobsPage jobs={jobs} />;
}
