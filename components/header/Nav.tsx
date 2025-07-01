import React, { useRef } from 'react';
import classNames from 'classnames';
import MenuBtn from './MenuBtn';
import NavMenuItem from './NavMenuItem';
import { useRouter } from 'next/router';
import ThemeToggle from '../molecules/ThemeToggle';
import LanguageSwitcher from '../molecules/LanguageSwitcher';
import Text from '../atoms/Text';
import { useTranslations } from '@/hooks/useTranslations';

interface NavProps {
  isOpen: boolean;
  toggleMenu: () => void;
}

export default function Nav({ isOpen, toggleMenu }: NavProps) {
  const router = useRouter();
  const navRef = useRef<HTMLElement>(null);
  const t = useTranslations();

  const handleMenuItemClick = (event: React.MouseEvent<HTMLButtonElement>, path?: string) => {
    if (path) {
      router.push(path);
    }
    toggleMenu();
  };

  const menuItems = [
    { label: t('navigation.home') as string, path: '/' },
    { label: t('navigation.about') as string, path: '/about' },
    { label: t('navigation.jobs') as string, path: '/jobs' },
    { label: t('navigation.contact') as string, path: '/contact' }
  ];

  return (
    <div>
      {/* MenuBtn outside nav for both mobile and desktop */}
      <MenuBtn
        isOpen={isOpen}
        onClick={toggleMenu}
        classNamesProps={`${
          isOpen ? 'translate-x-[calc(100vw-60px)] sm:translate-x-[220px]' : 'translate-x-0'
        } transition-all duration-500 ease-in-out z-20`}
      />

      {isOpen && (
        <div
          className='fixed inset-0 z-10 transition-colors duration-200'
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.5)'
          }}
          onClick={toggleMenu}
        />
      )}
      <nav
        ref={navRef}
        className={classNames(
          'fixed top-0 left-0 h-full z-10 transition-all duration-300 ease-in-out shadow-soft',
          'w-[calc(100vw-60px)] sm:w-[300px]',
          {
            'translate-x-0': isOpen,
            '-translate-x-full': !isOpen
          }
        )}
        style={{
          backgroundColor: 'var(--color-surface)',
          borderRight: '1px solid var(--color-border)'
        }}>
        <div className='flex flex-col h-full'>
          <ul
            className='flex flex-col relative mt-[80px] mx-[15px] sm:mx-[20px] space-y-3 sm:space-y-4 text-2xl sm:text-3xl overflow-y-auto flex-1 pb-8'
            style={{ borderTop: '2px solid var(--color-border)' }}>
            {menuItems.map((item, index) => (
              <NavMenuItem
                key={index}
                label={item.label}
                path={item.path}
                onClick={handleMenuItemClick}
              />
            ))}

            {/* Settings Section */}
            <li className='p-2 transition-colors duration-200 border-t border-gray-200 pt-4 mt-4'>
              <div className='flex flex-col gap-3 sm:gap-4'>
                <Text variant='body2' style={{ color: 'var(--color-text-light)' }}>
                  {t('navigation.settings') as string}
                </Text>

                {/* Theme Toggle */}
                <div className='flex flex-col gap-2'>
                  <Text
                    variant='body2'
                    style={{ color: 'var(--color-text-light)' }}
                    className='text-sm'>
                    {t('navigation.theme') as string}
                  </Text>
                  <ThemeToggle className='justify-start' />
                </div>

                {/* Language Switcher */}
                <div className='flex flex-col gap-2'>
                  <Text
                    variant='body2'
                    style={{ color: 'var(--color-text-light)' }}
                    className='text-sm'>
                    {t('navigation.language') as string}
                  </Text>
                  <LanguageSwitcher className='justify-start' />
                </div>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
