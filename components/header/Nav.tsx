import React, { useRef } from 'react';
import classNames from 'classnames';
import MenuBtn from './MenuBtn';
import { useRouter } from 'next/router';

interface NavProps {
  isOpen: boolean;
  toggleMenu: () => void;
}

export default function Nav({ isOpen, toggleMenu }: NavProps) {
  const router = useRouter();
  const navRef = useRef<HTMLElement>(null);
  const handleMenuItemClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const target = event.target as HTMLButtonElement;
    if (target.innerText.toLowerCase() === 'home') {
      router.push('/');
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
        <div className='fixed inset-0 bg-gray-900 bg-opacity-50 z-10' onClick={toggleMenu}></div>
      )}
      <nav
        ref={navRef}
        className={classNames(
          'fixed bg-gray-800 top-0 left-0 h-full w-[300px] z-10 transition-all duration-300 ease-in-out',
          {
            'translate-x-0': isOpen,
            '-translate-x-full': !isOpen
          }
        )}>
        <ul className='flex flex-col relative mt-[80px] mx-[20px] space-y-4 text-3xl border-t-2 border-gray-600'>
          <li className='p-2 hover:text-gray-400'>
            <button onClick={handleMenuItemClick}>Home</button>
          </li>
          <li className='p-2 hover:text-gray-400'>
            <button onClick={handleMenuItemClick}>About</button>
          </li>
          <li className='p-2 hover:text-gray-400'>
            <button onClick={handleMenuItemClick}>Jobs</button>
          </li>
          <li className='p-2 hover:text-gray-400'>
            <button onClick={handleMenuItemClick}>Contact</button>
          </li>
        </ul>
      </nav>
    </div>
  );
}
