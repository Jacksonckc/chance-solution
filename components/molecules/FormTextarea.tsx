import React from 'react';
import Text from '@/components/atoms/Text';

interface FormTextareaProps {
  id: string;
  name: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  required?: boolean;
  rows?: number;
  className?: string;
}

export default function FormTextarea({
  id,
  name,
  label,
  value,
  onChange,
  placeholder,
  required = false,
  rows = 6,
  className = ''
}: FormTextareaProps) {
  return (
    <div className={className}>
      <label htmlFor={id} className='block mb-2'>
        <Text variant='body2' as='span' style={{ color: 'var(--color-text)' }}>
          {label} {required && '*'}
        </Text>
      </label>
      <textarea
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        rows={rows}
        placeholder={placeholder}
        className='w-full px-4 py-3 rounded-md border transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-opacity-50 resize-vertical'
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
