import React from 'react';
import Text from '@/components/atoms/Text';

interface JobsHeaderProps {
  title?: string;
  description?: string;
  className?: string;
}

export default function JobsHeader({
  title = 'Job Openings',
  description = 'Join our team and help us build amazing solutions',
  className = ''
}: JobsHeaderProps) {
  return (
    <div className={`text-center mb-8 ${className}`}>
      <Text variant='h1' as='h1' className='mb-4'>
        {title}
      </Text>
      <Text variant='body1' as='p'>
        {description}
      </Text>
    </div>
  );
}
