export interface VideoDownloaderProps {
  className?: string;
}

export interface VideoDownloadInput {
  url?: string;
  duration?: number;
  output?: string;
}

export interface VideoDownloadResponse {
  success: boolean;
  message: string;
  output?: string;
  error?: string;
  filePath: string;
  downloadUrl: string;
  fileName: string;
  fileSizeFormatted: string;
}
