import React from 'react';
import Text from '@/components/atoms/Text';
import { useTranslations } from '@/hooks/useTranslations';

interface TechCategory {
  category: string;
  technologies: string[];
}

interface TechnologyStackProps {
  className?: string;
}

export default function TechnologyStack({ className = '' }: TechnologyStackProps) {
  const t = useTranslations();

  const techStack: TechCategory[] = [
    {
      category: t('about.techStack.frontend') as string,
      technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS']
    },
    {
      category: t('about.techStack.backend') as string,
      technologies: [
        'Node.js',
        'Express',
        'PostgreSQL',
        'REST APIs',
        'GraphQL',
        'Apollo Client',
        'Supabase'
      ]
    },
    {
      category: t('about.techStack.tools') as string,
      technologies: ['Git', 'AWS', 'Vercel', 'Figma']
    },
    {
      category: t('about.techStack.performance') as string,
      technologies: ['Lighthouse', 'Core Web Vitals', 'Caching', 'SEO']
    }
  ];

  return (
    <div className={`py-16 ${className}`}>
      <div className='max-w-6xl mx-auto px-6'>
        <div className='text-center mb-16'>
          <Text variant='h1' as='h2' className='mb-6'>
            {t('about.techStack.title')}
          </Text>
          <Text
            variant='body1'
            as='p'
            className='max-w-3xl mx-auto'
            style={{ color: 'var(--color-text-light)' }}>
            {t('about.techStack.subtitle')}
          </Text>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
          {techStack.map((category, index) => (
            <div
              key={index}
              className='card p-6 text-center hover:shadow-soft transition-all duration-300'>
              <Text variant='h3' as='h3' className='mb-4'>
                {category.category}
              </Text>
              <div className='space-y-2'>
                {category.technologies.map((tech, techIndex) => (
                  <div
                    key={techIndex}
                    className='px-3 py-2 rounded-md text-sm font-medium'
                    style={{
                      backgroundColor: 'var(--color-primary)',
                      color: 'white'
                    }}>
                    {tech}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className='text-center mt-12'>
          <Text
            variant='body1'
            as='p'
            className='mb-4'
            style={{ color: 'var(--color-text-light)' }}>
            {t('about.techStack.evolving')}
          </Text>
          <div
            className='flex justify-center items-center gap-2 text-sm'
            style={{ color: 'var(--color-text-light)' }}>
            <span>🔄</span>
            <span>{t('about.techStack.continuously')}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
