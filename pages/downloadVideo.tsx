import React from 'react';
import VideoDownloader from '@/components/VideoDownloader';

export default function DownloadVideoPage() {
  return (
    <div
      className='min-h-screen transition-colors duration-200'
      style={{ backgroundColor: 'var(--color-background)' }}>
      <VideoDownloader />
    </div>
  );
}
