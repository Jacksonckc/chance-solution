import React from 'react';
import ContactHeader from './ContactHeader';
import ContactMethodsSection from './ContactMethodsSection';
import CompanyInfoCard from './CompanyInfoCard';
import ServicesOverview from './ServicesOverview';
import { useTranslations } from '@/hooks/useTranslations';
// import ContactForm from '@/components/molecules/ContactForm';

interface ContactPageProps {
  email?: string;
  linkedInUrl?: string;
}

export default function ContactPage({
  email = 'jackson858216047@gmail.com',
  linkedInUrl = 'https://www.linkedin.com/company/chan-ce-solution-ltd-co/?viewAsMember=true'
}: ContactPageProps) {
  const t = useTranslations();

  const companyInfoItems = [
    {
      icon: '🎯',
      title: t('contact.company.mission.title') as string,
      description: t('contact.company.mission.description') as string
    },
    {
      icon: '🚀',
      title: t('contact.company.technology.title') as string,
      description: t('contact.company.technology.description') as string
    },
    {
      icon: '🤝',
      title: t('contact.company.partnership.title') as string,
      description: t('contact.company.partnership.description') as string
    }
  ];

  const services = [
    {
      icon: '🌐',
      title: t('contact.services.webDevelopment.title') as string,
      description: t('contact.services.webDevelopment.description') as string
    },
    {
      icon: '📱',
      title: t('contact.services.responsiveDesign.title') as string,
      description: t('contact.services.responsiveDesign.description') as string
    },
    {
      icon: '⚡',
      title: t('contact.services.performance.title') as string,
      description: t('contact.services.performance.description') as string
    },
    {
      icon: '🛠️',
      title: t('contact.services.support.title') as string,
      description: t('contact.services.support.description') as string
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
