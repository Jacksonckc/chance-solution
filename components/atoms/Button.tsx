import React from 'react';

interface ButtonProps {
  onClick: () => void;
  children: string;
  disabled?: boolean;
  className?: string;
}

export default function Button({
  onClick,
  children,
  disabled = false,
  className = ''
}: ButtonProps) {
  return (
    <button onClick={onClick} disabled={disabled} className={`${className}`}>
      {children}
    </button>
  );
}
