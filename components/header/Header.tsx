import React, { useState, useRef, useEffect } from 'react';
import Nav from './Nav';
import Text from '../atoms/Text';
import LanguageSwitcher from '../molecules/LanguageSwitcher';
import { useRouter } from 'next/router';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const toggleMenu = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (navRef.current && !navRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

    document.addEventListener('mousedown', handleClickOutside);

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    } else {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    };
  }, [isOpen]);

  return (
    <header
      className='relative flex items-center justify-between p-4 h-[80px] transition-colors duration-200 shadow-soft'
      style={{
        backgroundColor: 'var(--color-surface)',
        color: 'var(--color-text)',
        borderBottom: '1px solid var(--color-border)'
      }}>
      <Nav isOpen={isOpen} toggleMenu={toggleMenu} />

      <div
        className='absolute left-1/2 transform -translate-x-1/2 cursor-pointer'
        onClick={() => router.push('/')}>
        <Text variant='h1' as='h1' className='font-bold'>
          Chan&apos;ce Solution
        </Text>
      </div>

      {/* Desktop Language Switcher */}
      <div className='hidden md:flex items-center'>
        <LanguageSwitcher />
      </div>
    </header>
  );
}
