import React from 'react';
import { useTranslations } from '@/hooks/useTranslations';

interface VideoPreviewProps {
  fileName: string;
  fileSize: string;
  downloadUrl: string;
  onDownload: () => void;
  className?: string;
}

export default function VideoPreview({
  fileName,
  fileSize,
  downloadUrl,
  onDownload,
  className = ''
}: VideoPreviewProps) {
  const t = useTranslations();

  const handleDownload = () => {
    // Create a temporary link element to trigger download
    const link = document.createElement('a');
    link.href = downloadUrl;
    link.download = fileName;
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Call the onDownload callback
    onDownload();
  };

  return (
    <div
      className={`bg-white rounded-lg border border-gray-200 p-4 shadow-sm hover:shadow-md transition-shadow ${className}`}>
      <div className='flex items-center space-x-4'>
        {/* Video Icon */}
        <div className='flex-shrink-0'>
          <div className='w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center'>
            <svg className='w-8 h-8 text-white' fill='currentColor' viewBox='0 0 24 24'>
              <path d='M8 5v14l11-7z' />
            </svg>
          </div>
        </div>

        {/* File Info */}
        <div className='flex-1 min-w-0'>
          <h3 className='text-sm font-medium text-gray-900 truncate'>{fileName}</h3>
          <p className='text-sm text-gray-500'>{fileSize}</p>
        </div>

        {/* Download Button */}
        <div className='flex-shrink-0'>
          <button
            onClick={handleDownload}
            className='inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors'>
            <svg className='w-4 h-4 mr-2' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'
              />
            </svg>
            {t('videoDownload.download') as string}
          </button>
        </div>
      </div>
    </div>
  );
}
