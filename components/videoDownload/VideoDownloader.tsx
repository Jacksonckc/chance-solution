import React, { useState, useEffect } from 'react';
import Button from '../atoms/Button';
import VideoPreview from './VideoPreview';
import Text from '../atoms/Text';
import { useVideoDownload } from '../../hooks/useVideoDownload';
import { VideoDownloadInput, VideoDownloaderProps } from '@/lib/types';

export default function VideoDownloader({ className = '' }: VideoDownloaderProps) {
  const [url, setUrl] = useState('');
  const [duration, setDuration] = useState<number | ''>(''); // Empty string for entire video
  const [validationError, setValidationError] = useState<string | null>(null);
  const [isCleaning, setIsCleaning] = useState(false);
  const [cleanupMessage, setCleanupMessage] = useState<string | null>(null);

  const {
    isLoading,
    error,
    lastDownload,
    downloadHistory,
    downloadVideo,
    downloadTrendingVideo,
    clearError,
    clearHistory
  } = useVideoDownload();

  const validateInput = (isTrendingDownload: boolean = false): boolean => {
    setValidationError(null);

    if (!isTrendingDownload && !url.trim()) {
      setValidationError('Please enter a YouTube URL to download a specific video.');
      return false;
    }

    if (url.trim() && !isValidYouTubeUrl(url.trim())) {
      setValidationError(
        'Please enter a valid YouTube URL (e.g., https://www.youtube.com/watch?v=...)'
      );
      return false;
    }

    if (duration !== '' && (isNaN(Number(duration)) || Number(duration) <= 0)) {
      setValidationError('Duration must be a positive number.');
      return false;
    }

    return true;
  };

  const isValidYouTubeUrl = (url: string): boolean => {
    const youtubeRegex = /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be)\/.+/;
    return youtubeRegex.test(url);
  };

  const handleDownload = async () => {
    if (!validateInput(false)) {
      return;
    }

    const input: VideoDownloadInput = {
      url: url.trim(),
      duration: duration === '' ? undefined : Number(duration),
      output: `video_${Date.now()}.mp4`
    };

    try {
      await downloadVideo(input);
    } catch (error) {
      // Error is handled by the hook
      console.error('Download failed:', error);
    }
  };

  const handleTrendingDownload = async () => {
    if (!validateInput(true)) {
      return;
    }

    const input: VideoDownloadInput = {
      duration: duration === '' ? undefined : Number(duration),
      output: `trending_video_${Date.now()}.mp4`
    };

    try {
      await downloadTrendingVideo(input);
    } catch (error) {
      // Error is handled by the hook
      console.error('Trending download failed:', error);
    }
  };

  const handleCleanup = async () => {
    setIsCleaning(true);
    setCleanupMessage(null);

    try {
      const response = await fetch('/api/cleanup-videos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        }
      });

      const data = await response.json();

      if (data.success) {
        setCleanupMessage(`✅ ${data.message}`);
        // Clear download history since files are deleted
        clearHistory();
      } else {
        setCleanupMessage(`❌ ${data.error}`);
      }
    } catch {
      setCleanupMessage('❌ Failed to clean up videos');
    } finally {
      setIsCleaning(false);
    }
  };

  const handleDurationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value === '') {
      setDuration('');
    } else {
      const numValue = parseInt(value);
      if (!isNaN(numValue) && numValue > 0) {
        setDuration(numValue);
      }
    }
    // Clear validation error when user starts typing
    if (validationError) {
      setValidationError(null);
    }
  };

  const handleUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(e.target.value);
    // Clear validation error when user starts typing
    if (validationError) {
      setValidationError(null);
    }
  };

  const handleVideoDownload = () => {
    // Optional: Add any additional logic when user downloads a video
    console.log('Video download initiated');
  };

  // Auto-clear error after 5 seconds
  useEffect(() => {
    if (error) {
      const timer = setTimeout(clearError, 5000);
      return () => clearTimeout(timer);
    }
  }, [error, clearError]);

  // Auto-clear validation error after 5 seconds
  useEffect(() => {
    if (validationError) {
      const timer = setTimeout(() => setValidationError(null), 5000);
      return () => clearTimeout(timer);
    }
  }, [validationError]);

  // Auto-clear cleanup message after 5 seconds
  useEffect(() => {
    if (cleanupMessage) {
      const timer = setTimeout(() => setCleanupMessage(null), 5000);
      return () => clearTimeout(timer);
    }
  }, [cleanupMessage]);

  return (
    <div className={`max-w-4xl mx-auto p-6 ${className}`}>
      {/* Main Content */}
      <div className='card p-6 animate-fade-in'>
        <Text variant='h1' as='h2' className='mb-6 text-center'>
          YouTube Video Downloader
        </Text>

        <div className='space-y-6'>
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
              onChange={handleUrlChange}
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
              <Text variant='body2'>Duration (seconds) - Leave empty for entire video</Text>
            </label>
            <input
              type='number'
              id='duration'
              value={duration}
              onChange={handleDurationChange}
              min='1'
              max='3600'
              placeholder='300'
              className='input-field'
            />
            <Text variant='body3' className='mt-1' style={{ color: 'var(--color-text-light)' }}>
              {duration === ''
                ? 'Will download the entire video'
                : `Will download first ${duration} seconds (${Math.floor(
                    Number(duration) / 60
                  )} minutes)`}
            </Text>
          </div>

          {/* Action Buttons */}
          <div className='flex gap-4 pt-4'>
            <Button
              onClick={handleDownload}
              disabled={isLoading}
              className='flex-1 btn-primary disabled:opacity-50 disabled:cursor-not-allowed'>
              {isLoading ? 'Downloading...' : 'Download Video'}
            </Button>

            <Button
              onClick={handleTrendingDownload}
              disabled={isLoading}
              className='flex-1 btn-secondary disabled:opacity-50 disabled:cursor-not-allowed'>
              {isLoading ? 'Downloading...' : 'Download Trending'}
            </Button>
          </div>

          {/* Validation Error Display */}
          {validationError && (
            <div className='p-3 rounded-md bg-yellow-100 text-yellow-800 border border-yellow-200'>
              <div className='flex justify-between items-start'>
                <Text variant='body2'>⚠️ {validationError}</Text>
                <button
                  onClick={() => setValidationError(null)}
                  className='text-yellow-600 hover:text-yellow-800 text-sm'>
                  ✕
                </button>
              </div>
            </div>
          )}

          {/* API Error Display */}
          {error && (
            <div className='p-3 rounded-md bg-red-100 text-red-800 border border-red-200'>
              <div className='flex justify-between items-start'>
                <Text variant='body2'>{error}</Text>
                <button onClick={clearError} className='text-red-600 hover:text-red-800 text-sm'>
                  ✕
                </button>
              </div>
            </div>
          )}

          {/* Cleanup Message */}
          {cleanupMessage && (
            <div className='p-3 rounded-md bg-blue-100 text-blue-800 border border-blue-200'>
              <div className='flex justify-between items-start'>
                <Text variant='body2'>{cleanupMessage}</Text>
                <button
                  onClick={() => setCleanupMessage(null)}
                  className='text-blue-600 hover:text-blue-800 text-sm'>
                  ✕
                </button>
              </div>
            </div>
          )}

          {/* Success Message */}
          {lastDownload?.success && (
            <div className='p-3 rounded-md bg-green-100 text-green-800 border border-green-200'>
              <Text variant='body2' className='font-medium'>
                ✅ {lastDownload.message}
              </Text>
            </div>
          )}

          {/* Video Preview */}
          {lastDownload?.success && lastDownload.downloadUrl && (
            <div className='animate-slide-up'>
              <VideoPreview
                fileName={lastDownload.fileName}
                fileSize={lastDownload.fileSizeFormatted}
                downloadUrl={lastDownload.downloadUrl}
                onDownload={handleVideoDownload}
              />
            </div>
          )}

          {/* Download History */}
          {downloadHistory.length > 0 && (
            <div className='card p-4'>
              <div className='flex justify-between items-center mb-3'>
                <Text variant='h4' as='h3' className='font-medium'>
                  Download History
                </Text>
                <div className='flex gap-2'>
                  <button
                    onClick={clearHistory}
                    className='text-sm hover:opacity-70 transition-opacity'
                    style={{ color: 'var(--color-text-light)' }}>
                    Clear History
                  </button>
                  <span style={{ color: 'var(--color-border)' }}>|</span>
                  <button
                    onClick={handleCleanup}
                    disabled={isCleaning}
                    className='text-sm text-red-600 hover:text-red-800 disabled:text-gray-400 transition-colors'>
                    {isCleaning ? 'Cleaning...' : 'Cleanup Files'}
                  </button>
                </div>
              </div>
              <div className='space-y-3'>
                {downloadHistory
                  .slice(-3)
                  .reverse()
                  .map((download, index) => (
                    <div key={index}>
                      {download.success && download.downloadUrl ? (
                        <VideoPreview
                          fileName={download.fileName}
                          fileSize={download.fileSizeFormatted}
                          downloadUrl={download.downloadUrl}
                          onDownload={handleVideoDownload}
                          className='scale-90'
                        />
                      ) : (
                        <div className='text-sm p-2 bg-white rounded border border-red-200'>
                          <Text variant='body3' className='text-red-600 font-medium'>
                            ❌ {download.message}
                          </Text>
                        </div>
                      )}
                    </div>
                  ))}
              </div>
            </div>
          )}

          {/* Instructions */}
          <div className='card p-4'>
            <Text variant='h4' as='h3' className='mb-2'>
              How it works:
            </Text>
            <ul className='text-sm space-y-1' style={{ color: 'var(--color-text-light)' }}>
              <li>
                • <strong>Download Video:</strong> Requires a YouTube URL to download a specific
                video
              </li>
              <li>
                • <strong>Download Trending:</strong> Downloads the most viewed trending video of
                the day (no URL needed)
              </li>
              <li>
                • <strong>Duration:</strong> Leave empty to download entire video, or specify
                seconds for a segment
              </li>
              <li>• Videos are saved in MP4 format with best quality up to 1080p</li>
              <li>• Click the download button to save the video to your device</li>
              <li>• Use &quot;Cleanup Files&quot; to remove old video files from the server</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
