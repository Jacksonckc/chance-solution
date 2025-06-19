import React from 'react';
import Text from '@/components/atoms/Text';

interface NavMenuItemProps {
  label: string;
  path?: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>, path?: string) => void;
  className?: string;
}

export default function NavMenuItem({ label, path, onClick, className = '' }: NavMenuItemProps) {
  return (
    <li className={`p-2 transition-colors duration-200 ${className}`}>
      <button
        onClick={(e) => onClick(e, path)}
        className='hover:opacity-70 transition-opacity w-full text-left'>
        <Text variant='h3' as='span'>
          {label}
        </Text>
      </button>
    </li>
  );
}
