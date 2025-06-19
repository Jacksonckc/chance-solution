import React from 'react';
import Text from '@/components/atoms/Text';

interface VideoDownloadInputProps {
  url: string;
  duration: number | '';
  onUrlChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onDurationChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  validationError: string | null;
  className?: string;
}

export default function VideoDownloadInput({
  url,
  duration,
  onUrlChange,
  onDurationChange,
  validationError,
  className = ''
}: VideoDownloadInputProps) {
  return (
    <div className={`space-y-6 ${className}`}>
      {/* URL Input */}
      <div>
        <label
          htmlFor='url'
          className='block mb-2 font-medium'
          style={{ color: 'var(--color-text)' }}>
          <Text variant='body2'>
            YouTube URL (Required for &quot;Download Video&quot;, optional for &quot;Download
            Trending&quot;)
          </Text>
        </label>
        <input
          type='url'
          id='url'
          value={url}
          onChange={onUrlChange}
          placeholder='https://www.youtube.com/watch?v=...'
          className='input-field'
        />
      </div>

      {/* Duration Input */}
      <div>
        <label
          htmlFor='duration'
          className='block mb-2 font-medium'
          style={{ color: 'var(--color-text)' }}>
          <Text variant='body2'>Duration (seconds, optional - leave empty for entire video)</Text>
        </label>
        <input
          type='number'
          id='duration'
          value={duration}
          onChange={onDurationChange}
          placeholder='Enter duration in seconds'
          min='1'
          className='input-field'
        />
      </div>

      {/* Validation Error */}
      {validationError && (
        <div
          className='p-4 rounded-md'
          style={{ backgroundColor: 'var(--color-error-light)', color: 'var(--color-error)' }}>
          <Text variant='body2' as='p'>
            {validationError}
          </Text>
        </div>
      )}
    </div>
  );
}
