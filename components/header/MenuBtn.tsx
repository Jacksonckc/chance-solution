import classNames from 'classnames';
import React from 'react';

interface MenuBtnProps {
  isOpen: boolean;
  onClick: () => void;
  classNamesProps?: string;
}

export default function MenuBtn({ isOpen, onClick, classNamesProps }: MenuBtnProps) {
  return (
    <button
      className={classNames(
        'relative w-12 h-12 bg-transparent border-2 rounded-lg focus:outline-none group transition-all duration-300 ease-out hover:scale-105 active:scale-95',
        classNamesProps
      )}
      style={{
        borderColor: 'var(--color-text)',
        backgroundColor: isOpen ? 'var(--color-primary)' : 'transparent'
      }}
      aria-label={isOpen ? 'Close menu' : 'Open menu'}
      aria-expanded={isOpen}
      onClick={onClick}>
      {/* Top line */}
      <div
        className={classNames(
          'absolute left-1/2 top-3 w-6 h-0.5 transition-all duration-300 ease-out transform -translate-x-1/2 rounded-lg',
          isOpen
            ? '-rotate-45 translate-y-[1px] bg-white'
            : 'rotate-0 translate-y-0 group-hover:scale-110'
        )}
        style={{
          backgroundColor: isOpen ? 'white' : 'var(--color-text)',
          boxShadow: isOpen ? '0 0 8px rgba(255,255,255,0.5)' : 'none'
        }}
      />

      {/* Middle line */}
      <div
        className={classNames(
          'absolute left-1/2 top-1/2 w-6 h-0.5 transition-all duration-300 ease-out transform -translate-x-1/2 -translate-y-1/2 rounded-lg',
          isOpen ? 'opacity-0 scale-0' : 'opacity-100 scale-100 group-hover:scale-110'
        )}
        style={{
          backgroundColor: 'var(--color-text)'
        }}
      />

      {/* Bottom line */}
      <div
        className={classNames(
          'absolute left-1/2 bottom-3 w-6 h-0.5 transition-all duration-300 ease-out transform -translate-x-1/2 rounded-lg',
          isOpen
            ? 'rotate-45 -translate-y-[1px] bg-white'
            : 'rotate-0 translate-y-0 group-hover:scale-110'
        )}
        style={{
          backgroundColor: isOpen ? 'white' : 'var(--color-text)',
          boxShadow: isOpen ? '0 0 8px rgba(255,255,255,0.5)' : 'none'
        }}
      />

      {/* Background glow effect when open */}
      {isOpen && (
        <div
          className='absolute inset-0 rounded-lg transition-all duration-300 ease-out animate-pulse-slow'
          style={{
            background: 'radial-gradient(circle, var(--color-primary-light) 0%, transparent 70%)',
            opacity: 0.3
          }}
        />
      )}

      {/* Hover effect ring */}
      <div
        className={classNames(
          'absolute inset-0 rounded-lg transition-all duration-300 ease-out',
          'group-hover:ring-2 group-hover:ring-opacity-50'
        )}
        style={{
          boxShadow: '0 0 0 0 var(--color-primary)',
          opacity: 0
        }}
      />
    </button>
  );
}
