import React, { useState, useRef, useEffect } from 'react';
import Nav from './Nav';
import Button from '../common/Button';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

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
    <header className='relative flex items-center justify-between p-4 bg-gray-800 text-white h-[80px]'>
      <Nav isOpen={isOpen} toggleMenu={toggleMenu} />
      <div className='text-xl font-bold'>Chan&apos;ce Solution</div>
      <Button className='ml-4 p-2 bg-blue-500 hover:bg-blue-700 rounded' onClick={() => {}}>
        Action
      </Button>
    </header>
  );
}
