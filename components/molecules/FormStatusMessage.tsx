import React from 'react';
import Text from '@/components/atoms/Text';

interface FormStatusMessageProps {
  type: 'success' | 'error';
  message: string;
  className?: string;
}

export default function FormStatusMessage({
  type,
  message,
  className = ''
}: FormStatusMessageProps) {
  const styles = {
    success: {
      backgroundColor: 'var(--color-success-light)',
      color: 'var(--color-success)'
    },
    error: {
      backgroundColor: 'var(--color-error-light)',
      color: 'var(--color-error)'
    }
  };

  return (
    <div className={`text-center p-4 rounded-md ${className}`} style={styles[type]}>
      <Text variant='body2' as='p'>
        {message}
      </Text>
    </div>
  );
}
