import React from 'react';
import Text from '@/components/atoms/Text';

interface TechCategory {
  category: string;
  technologies: string[];
}

interface TechnologyStackProps {
  className?: string;
}

export default function TechnologyStack({ className = '' }: TechnologyStackProps) {
  const techStack: TechCategory[] = [
    {
      category: 'Frontend',
      technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'HTML5', 'CSS3']
    },
    {
      category: 'Backend',
      technologies: ['Node.js', 'Express', 'Python', 'PostgreSQL', 'MongoDB', 'REST APIs']
    },
    {
      category: 'Tools & Platforms',
      technologies: ['Git', 'Docker', 'AWS', 'Vercel', 'Figma', 'VS Code']
    },
    {
      category: 'Performance',
      technologies: ['Webpack', 'Babel', 'Lighthouse', 'Core Web Vitals', 'CDN', 'Caching']
    }
  ];

  return (
    <div className={`py-16 ${className}`}>
      <div className='max-w-6xl mx-auto px-6'>
        <div className='text-center mb-16'>
          <Text variant='h1' as='h2' className='mb-6'>
            Technology Stack
          </Text>
          <Text
            variant='body1'
            as='p'
            className='max-w-3xl mx-auto'
            style={{ color: 'var(--color-text-light)' }}>
            We use cutting-edge technologies to build robust, scalable, and maintainable web
            applications that deliver exceptional user experiences.
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
            Always learning and adopting new technologies to stay ahead of the curve
          </Text>
          <div
            className='flex justify-center items-center gap-2 text-sm'
            style={{ color: 'var(--color-text-light)' }}>
            <span>🔄</span>
            <span>Continuously evolving our tech stack</span>
          </div>
        </div>
      </div>
    </div>
  );
}
