import React from 'react';

interface ButtonProps {
  onClick?: () => void;
  children: string;
  disabled?: boolean;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

export default function Button({
  onClick,
  children,
  disabled = false,
  className = '',
  type = 'button'
}: ButtonProps) {
  return (
    <button type={type} onClick={onClick} disabled={disabled} className={`${className}`}>
      {children}
    </button>
  );
}
