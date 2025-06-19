import React from 'react';
import ContactHeader from './ContactHeader';
import ContactMethodsSection from './ContactMethodsSection';
import CompanyInfoCard from './CompanyInfoCard';
import ServicesOverview from './ServicesOverview';
// import ContactForm from '@/components/molecules/ContactForm';

interface ContactPageProps {
  email?: string;
  linkedInUrl?: string;
}

export default function ContactPage({
  email = 'jackson858216047@gmail.com',
  linkedInUrl = 'https://www.linkedin.com/company/chan-ce-solution-ltd-co/?viewAsMember=true'
}: ContactPageProps) {
  const companyInfoItems = [
    {
      icon: '🎯',
      title: 'Our Mission',
      description:
        'Building powerful, user-friendly web applications designed to meet the needs of small businesses and fuel their success.'
    },
    {
      icon: '🚀',
      title: 'Technology Focus',
      description:
        'Specializing in modern web technologies, responsive design, and scalable solutions that grow with your business.'
    },
    {
      icon: '🤝',
      title: 'Partnership Approach',
      description:
        'We work closely with our clients to understand their unique needs and deliver customized solutions.'
    }
  ];

  const services = [
    {
      icon: '🌐',
      title: 'Web Development',
      description: 'Custom websites and web applications'
    },
    {
      icon: '📱',
      title: 'Responsive Design',
      description: 'Mobile-first, cross-platform solutions'
    },
    {
      icon: '⚡',
      title: 'Performance',
      description: 'Fast, optimized, and scalable applications'
    },
    {
      icon: '🛠️',
      title: 'Support',
      description: 'Ongoing maintenance and updates'
    }
  ];

  return (
    <div
      className='min-h-screen p-6 transition-colors duration-200'
      style={{ backgroundColor: 'var(--color-background)' }}>
      <div className='max-w-4xl mx-auto'>
        <ContactHeader />
        <ContactMethodsSection email={email} linkedInUrl={linkedInUrl} />
        <CompanyInfoCard items={companyInfoItems} />
        <ServicesOverview services={services} />
        {/* <ContactForm /> */}
      </div>
    </div>
  );
}
