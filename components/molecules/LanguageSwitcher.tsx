import React, { useState, useRef, useEffect } from 'react';
import { useUser } from '@/contexts/userContext';

interface LanguageSwitcherProps {
  className?: string;
}

export default function LanguageSwitcher({ className = '' }: LanguageSwitcherProps) {
  const { language, saveLanguagePreference } = useUser();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'zh', name: '中文', flag: '🇨🇳' }
  ];

  const currentLanguage = languages.find((lang) => lang.code === language) || languages[0];

  const handleLanguageChange = (newLocale: string) => {
    saveLanguagePreference(newLocale);
    setIsOpen(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className='relative' ref={dropdownRef}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className='flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-200 hover:shadow-soft'
          style={{
            backgroundColor: 'var(--color-surface)',
            border: '1px solid var(--color-border)',
            color: 'var(--color-text)'
          }}>
          <span className='text-lg'>{currentLanguage.flag}</span>
          <span className='text-sm font-medium hidden sm:block'>{currentLanguage.name}</span>
          <svg
            className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'>
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 9l-7 7-7-7' />
          </svg>
        </button>

        {/* Dropdown Menu */}
        {isOpen && (
          <div
            className='absolute top-full left-0 mt-1 py-2 rounded-lg shadow-soft z-50 min-w-[140px]'
            style={{
              backgroundColor: 'var(--color-surface)',
              border: '1px solid var(--color-border)'
            }}>
            {languages.map((languageOption) => (
              <button
                key={languageOption.code}
                onClick={() => handleLanguageChange(languageOption.code)}
                className={`w-full flex items-center gap-3 px-3 py-2 text-left transition-colors duration-200 hover:opacity-70 ${
                  language === languageOption.code ? 'font-medium' : ''
                }`}
                style={{ color: 'var(--color-text)' }}>
                <span className='text-lg'>{languageOption.flag}</span>
                <span className='text-sm'>{languageOption.name}</span>
                {language === languageOption.code && (
                  <svg className='w-4 h-4 ml-auto' fill='currentColor' viewBox='0 0 20 20'>
                    <path
                      fillRule='evenodd'
                      d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                      clipRule='evenodd'
                    />
                  </svg>
                )}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
