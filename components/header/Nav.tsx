import React, { useRef } from 'react';
import classNames from 'classnames';
import MenuBtn from './MenuBtn';
import { useRouter } from 'next/router';
import ThemeToggle from '../ThemeToggle';
import Text from '../common/Text';

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
          <li className='p-2 transition-colors duration-200'>
            <button
              onClick={handleMenuItemClick}
              className='hover:opacity-70 transition-opacity w-full text-left'>
              <Text variant='h3' as='span'>
                Home
              </Text>
            </button>
          </li>
          <li className='p-2 transition-colors duration-200'>
            <button
              onClick={handleMenuItemClick}
              className='hover:opacity-70 transition-opacity w-full text-left'>
              <Text variant='h3' as='span'>
                About
              </Text>
            </button>
          </li>
          <li className='p-2 transition-colors duration-200'>
            <button
              onClick={handleMenuItemClick}
              className='hover:opacity-70 transition-opacity w-full text-left'>
              <Text variant='h3' as='span'>
                Jobs
              </Text>
            </button>
          </li>
          <li className='p-2 transition-colors duration-200'>
            <button
              onClick={handleMenuItemClick}
              className='hover:opacity-70 transition-opacity w-full text-left'>
              <Text variant='h3' as='span'>
                Contact
              </Text>
            </button>
          </li>
          <li className='p-2 transition-colors duration-200'>
            <button
              onClick={(e) => handleMenuItemClick(e, 'downloadVideo')}
              className='hover:opacity-70 transition-opacity w-full text-left'>
              <Text variant='h3' as='span'>
                Download Video
              </Text>
            </button>
          </li>

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
