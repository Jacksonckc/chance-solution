import React from 'react';
import Text from '@/components/atoms/Text';

interface FormInputProps {
  id: string;
  name: string;
  label: string;
  type?: 'text' | 'email' | 'url' | 'number';
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  required?: boolean;
  className?: string;
}

export default function FormInput({
  id,
  name,
  label,
  type = 'text',
  value,
  onChange,
  placeholder,
  required = false,
  className = ''
}: FormInputProps) {
  return (
    <div className={className}>
      <label htmlFor={id} className='block mb-2'>
        <Text variant='body2' as='span' style={{ color: 'var(--color-text)' }}>
          {label} {required && '*'}
        </Text>
      </label>
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        className='w-full px-4 py-3 rounded-md border transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-opacity-50'
        style={
          {
            backgroundColor: 'var(--color-background)',
            borderColor: 'var(--color-border)',
            color: 'var(--color-text)',
            '--tw-ring-color': 'var(--color-primary)'
          } as React.CSSProperties
        }
      />
    </div>
  );
}
