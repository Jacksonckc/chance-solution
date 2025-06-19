import React from 'react';
import Text from '@/components/atoms/Text';

interface ValueItem {
  icon: string;
  title: string;
  description: string;
}

interface MissionValuesProps {
  className?: string;
}

export default function MissionValues({ className = '' }: MissionValuesProps) {
  const values: ValueItem[] = [
    {
      icon: '🎯',
      title: 'Innovation',
      description:
        'We stay ahead of technology trends to deliver cutting-edge solutions that give our clients a competitive edge.'
    },
    {
      icon: '🤝',
      title: 'Partnership',
      description:
        'We work closely with our clients, treating their success as our own and building long-term relationships.'
    },
    {
      icon: '⚡',
      title: 'Excellence',
      description:
        'We maintain the highest standards in code quality, performance, and user experience.'
    },
    {
      icon: '🚀',
      title: 'Growth',
      description: 'We help businesses scale and grow through scalable, maintainable web solutions.'
    }
  ];

  return (
    <div className={`py-16 ${className}`}>
      <div className='max-w-6xl mx-auto px-6'>
        {/* Mission Section */}
        <div className='text-center mb-16'>
          <Text variant='h1' as='h2' className='mb-6'>
            Our Mission
          </Text>
          <Text
            variant='body1'
            as='p'
            className='max-w-4xl mx-auto leading-relaxed'
            style={{ color: 'var(--color-text-light)' }}>
            To empower small businesses with powerful, user-friendly web applications that drive
            growth, enhance customer engagement, and create lasting digital impact. We believe every
            business deserves access to professional web solutions that work.
          </Text>
        </div>

        {/* Values Section */}
        <div className='text-center mb-12'>
          <Text variant='h2' as='h3' className='mb-6'>
            Our Values
          </Text>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
          {values.map((value, index) => (
            <div
              key={index}
              className='card p-8 text-center hover:shadow-soft transition-all duration-300'>
              <div className='text-4xl mb-4'>{value.icon}</div>
              <Text variant='h3' as='h4' className='mb-3'>
                {value.title}
              </Text>
              <Text variant='body2' style={{ color: 'var(--color-text-light)' }}>
                {value.description}
              </Text>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
