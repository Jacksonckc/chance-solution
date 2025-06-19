import { useState, useCallback } from 'react';
import { VideoDownloadInput, VideoDownloadResponse } from '../lib/graphql/schema';

interface UseVideoDownloadState {
  isLoading: boolean;
  error: string | null;
  lastDownload: VideoDownloadResponse | null;
  downloadHistory: VideoDownloadResponse[];
}

interface UseVideoDownloadActions {
  downloadVideo: (input: VideoDownloadInput) => Promise<VideoDownloadResponse>;
  downloadTrendingVideo: (input: VideoDownloadInput) => Promise<VideoDownloadResponse>;
  clearError: () => void;
  clearHistory: () => void;
}

export function useVideoDownload(): UseVideoDownloadState & UseVideoDownloadActions {
  const [state, setState] = useState<UseVideoDownloadState>({
    isLoading: false,
    error: null,
    lastDownload: null,
    downloadHistory: []
  });

  const downloadVideo = useCallback(
    async (input: VideoDownloadInput): Promise<VideoDownloadResponse> => {
      setState((prev) => ({ ...prev, isLoading: true, error: null }));

      try {
        const response = await fetch('/api/download-video', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(input)
        });

        const data: VideoDownloadResponse = await response.json();

        if (data.success) {
          setState((prev) => ({
            ...prev,
            isLoading: false,
            lastDownload: data,
            downloadHistory: [...prev.downloadHistory, data]
          }));
        } else {
          setState((prev) => ({
            ...prev,
            isLoading: false,
            error: data.error || 'Download failed',
            lastDownload: data
          }));
        }

        return data;
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Network error';
        setState((prev) => ({
          ...prev,
          isLoading: false,
          error: errorMessage
        }));
        throw error;
      }
    },
    []
  );

  const downloadTrendingVideo = useCallback(
    async (input: VideoDownloadInput): Promise<VideoDownloadResponse> => {
      setState((prev) => ({ ...prev, isLoading: true, error: null }));

      try {
        const response = await fetch('/api/download-video', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            ...input,
            // Remove URL to indicate trending video download
            url: undefined
          })
        });

        const data: VideoDownloadResponse = await response.json();

        if (data.success) {
          setState((prev) => ({
            ...prev,
            isLoading: false,
            lastDownload: data,
            downloadHistory: [...prev.downloadHistory, data]
          }));
        } else {
          setState((prev) => ({
            ...prev,
            isLoading: false,
            error: data.error || 'Download failed',
            lastDownload: data
          }));
        }

        return data;
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Network error';
        setState((prev) => ({
          ...prev,
          isLoading: false,
          error: errorMessage
        }));
        throw error;
      }
    },
    []
  );

  const clearError = useCallback(() => {
    setState((prev) => ({ ...prev, error: null }));
  }, []);

  const clearHistory = useCallback(() => {
    setState((prev) => ({ ...prev, downloadHistory: [] }));
  }, []);

  return {
    ...state,
    downloadVideo,
    downloadTrendingVideo,
    clearError,
    clearHistory
  };
}
