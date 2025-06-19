import React from 'react';
import Button from '@/components/atoms/Button';

interface VideoDownloadActionsProps {
  onDownload: () => void;
  onTrendingDownload: () => void;
  onCleanup: () => void;
  isLoading: boolean;
  isCleaning: boolean;
  className?: string;
}

export default function VideoDownloadActions({
  onDownload,
  onTrendingDownload,
  onCleanup,
  isLoading,
  isCleaning,
  className = ''
}: VideoDownloadActionsProps) {
  return (
    <div className={`space-y-4 ${className}`}>
      <div className='flex flex-col sm:flex-row gap-4'>
        <Button onClick={onDownload} disabled={isLoading} className='btn-primary flex-1'>
          {isLoading ? 'Downloading...' : 'Download Video'}
        </Button>

        <Button onClick={onTrendingDownload} disabled={isLoading} className='btn-secondary flex-1'>
          {isLoading ? 'Downloading...' : 'Download Trending'}
        </Button>
      </div>

      <div className='text-center'>
        <Button onClick={onCleanup} disabled={isCleaning} className='btn-outline'>
          {isCleaning ? 'Cleaning...' : 'Clean Up Videos'}
        </Button>
      </div>
    </div>
  );
}
