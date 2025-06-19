import React from 'react';
import Text from '@/components/atoms/Text';
import Button from '@/components/atoms/Button';

interface ServiceItem {
  icon: string;
  title: string;
  description: string;
  features: string[];
}

interface ServicesShowcaseProps {
  className?: string;
}

export default function ServicesShowcase({ className = '' }: ServicesShowcaseProps) {
  const services: ServiceItem[] = [
    {
      icon: '🌐',
      title: 'Web Development',
      description: 'Custom websites and web applications built with modern technologies.',
      features: [
        'Responsive design for all devices',
        'SEO-optimized for better visibility',
        'Fast loading and performance',
        'Scalable architecture'
      ]
    },
    {
      icon: '📱',
      title: 'Mobile-First Design',
      description: 'Mobile-optimized solutions that work seamlessly across all platforms.',
      features: [
        'Progressive Web Apps (PWA)',
        'Cross-platform compatibility',
        'Touch-friendly interfaces',
        'Offline functionality'
      ]
    },
    {
      icon: '⚡',
      title: 'Performance Optimization',
      description: 'Lightning-fast applications that provide exceptional user experiences.',
      features: [
        'Code optimization',
        'Image and asset compression',
        'Caching strategies',
        'CDN integration'
      ]
    },
    {
      icon: '🛠️',
      title: 'Maintenance & Support',
      description: 'Ongoing support and maintenance to keep your applications running smoothly.',
      features: [
        'Regular updates and security patches',
        '24/7 monitoring',
        'Backup and recovery',
        'Technical support'
      ]
    }
  ];

  return (
    <div className={`py-16 ${className}`}>
      <div className='max-w-6xl mx-auto px-6'>
        <div className='text-center mb-16'>
          <Text variant='h1' as='h2' className='mb-6'>
            Our Services
          </Text>
          <Text
            variant='body1'
            as='p'
            className='max-w-3xl mx-auto'
            style={{ color: 'var(--color-text-light)' }}>
            We offer comprehensive web development services tailored to meet the unique needs of
            small businesses and startups.
          </Text>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12'>
          {services.map((service, index) => (
            <div key={index} className='card p-8 hover:shadow-soft transition-all duration-300'>
              <div className='flex items-start gap-4 mb-6'>
                <div className='text-4xl'>{service.icon}</div>
                <div className='flex-1'>
                  <Text variant='h3' as='h3' className='mb-2'>
                    {service.title}
                  </Text>
                  <Text variant='body2' style={{ color: 'var(--color-text-light)' }}>
                    {service.description}
                  </Text>
                </div>
              </div>

              <ul className='space-y-2'>
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className='flex items-center gap-2'>
                    <span style={{ color: 'var(--color-success)' }}>✓</span>
                    <Text variant='body3' style={{ color: 'var(--color-text)' }}>
                      {feature}
                    </Text>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className='text-center'>
          <Button
            className='btn-primary text-lg px-8 py-4'
            onClick={() => (window.location.href = '/contact')}>
            Start Your Project
          </Button>
        </div>
      </div>
    </div>
  );
}
