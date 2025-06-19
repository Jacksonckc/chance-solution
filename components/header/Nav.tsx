import React, { useRef } from 'react';
import classNames from 'classnames';
import MenuBtn from './MenuBtn';
import NavMenuItem from './NavMenuItem';
import { useRouter } from 'next/router';
import ThemeToggle from '../molecules/ThemeToggle';
import Text from '../atoms/Text';

interface NavProps {
  isOpen: boolean;
  toggleMenu: () => void;
}

export default function Nav({ isOpen, toggleMenu }: NavProps) {
  const router = useRouter();
  const navRef = useRef<HTMLElement>(null);

  const handleMenuItemClick = (event: React.MouseEvent<HTMLButtonElement>, path?: string) => {
    const target = event.target as HTMLButtonElement;
    if (target.innerText.toLowerCase() === 'home') {
      router.push('/');
    } else if (path) {
      router.push(`/${path}`);
    } else {
      router.push(`/${target.innerText.toLowerCase()}`);
    }
    toggleMenu();
  };

  const menuItems = [
    { label: 'Home', path: undefined },
    { label: 'About', path: undefined },
    { label: 'Jobs', path: undefined },
    { label: 'Contact', path: undefined },
    { label: 'Download Video', path: 'downloadVideo' }
  ];

  return (
    <div>
      <MenuBtn
        isOpen={isOpen}
        onClick={toggleMenu}
        classNamesProps={`${
          isOpen ? 'translate-x-[220px]' : 'translate-x-0'
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
          'fixed top-0 left-0 h-full w-[300px] z-10 transition-all duration-300 ease-in-out shadow-soft',
          {
            'translate-x-0': isOpen,
            '-translate-x-full': !isOpen
          }
        )}
        style={{
          backgroundColor: 'var(--color-surface)',
          borderRight: '1px solid var(--color-border)'
        }}>
        <ul
          className='flex flex-col relative mt-[80px] mx-[20px] space-y-4 text-3xl'
          style={{ borderTop: '2px solid var(--color-border)' }}>
          {menuItems.map((item, index) => (
            <NavMenuItem
              key={index}
              label={item.label}
              path={item.path}
              onClick={handleMenuItemClick}
            />
          ))}

          {/* Theme Toggle for Mobile */}
          <li className='p-2 transition-colors duration-200 border-t border-gray-200 pt-4 mt-4'>
            <div className='flex flex-col gap-2'>
              <Text variant='body2' style={{ color: 'var(--color-text-light)' }}>
                Theme Settings
              </Text>
              <ThemeToggle className='justify-start' />
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
}
