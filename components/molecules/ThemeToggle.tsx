import React, { useState, useRef, useEffect } from 'react';
import { useTheme, Theme } from '../../contexts/ThemeContext';

interface ThemeToggleProps {
  className?: string;
}

export default function ThemeToggle({ className = '' }: ThemeToggleProps) {
  const { theme, setTheme, isDark, toggleDark } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const themes: { value: Theme; label: string; color: string; icon: string }[] = [
    {
      value: 'pink',
      label: 'Pink',
      color: '#ec4899',
      icon: '🌸'
    },
    {
      value: 'blue',
      label: 'Blue',
      color: '#3b82f6',
      icon: '🌊'
    },
    {
      value: 'neutral',
      label: 'Neutral',
      color: '#737373',
      icon: '⚫'
    }
  ];

  const currentTheme = themes.find((t) => t.value === theme);

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
      {/* Theme Dropdown */}
      <div className='relative' ref={dropdownRef}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className='flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-200 hover:shadow-soft'
          style={{
            backgroundColor: 'var(--color-surface)',
            border: '1px solid var(--color-border)',
            color: 'var(--color-text)'
          }}>
          <span className='text-lg'>{currentTheme?.icon}</span>
          <span className='text-sm font-medium hidden sm:block'>{currentTheme?.label}</span>
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
            {themes.map((themeOption) => (
              <button
                key={themeOption.value}
                onClick={() => {
                  setTheme(themeOption.value);
                  setIsOpen(false);
                }}
                className={`w-full flex items-center gap-3 px-3 py-2 text-left transition-colors duration-200 hover:opacity-70 ${
                  theme === themeOption.value ? 'font-medium' : ''
                }`}
                style={{ color: 'var(--color-text)' }}>
                <span className='text-lg'>{themeOption.icon}</span>
                <span className='text-sm'>{themeOption.label}</span>
                {theme === themeOption.value && (
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

      {/* Dark Mode Toggle */}
      <button
        onClick={toggleDark}
        className={`relative inline-flex h-8 w-14 items-center rounded-full transition-colors duration-200 p-1 ${
          isDark ? 'bg-gray-600' : 'bg-gray-200'
        }`}
        style={{
          backgroundColor: isDark ? 'var(--color-primary-dark)' : 'var(--color-border)'
        }}
        title={`Switch to ${isDark ? 'light' : 'dark'} mode`}>
        <span
          className={`inline-block h-6 w-6 transform rounded-full transition-all duration-200 flex items-center justify-center ${
            isDark ? 'translate-x-6 bg-gray-800' : 'translate-x-0 bg-white'
          }`}>
          {isDark ? <span className='text-xs'>🌙</span> : <span className='text-xs'>☀️</span>}
        </span>
      </button>
    </div>
  );
}
