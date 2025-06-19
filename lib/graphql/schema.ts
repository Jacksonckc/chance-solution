export const typeDefs = `
  type VideoDownload {
    id: ID!
    url: String
    duration: Int
    output: String!
    filePath: String!
    downloadUrl: String!
    fileName: String!
    fileSize: Int!
    fileSizeFormatted: String!
    success: Boolean!
    message: String!
    error: String
    createdAt: String!
  }

  type VideoDownloadResponse {
    success: Boolean!
    message: String!
    output: String
    error: String
    filePath: String!
    downloadUrl: String!
    fileName: String!
    fileSize: Int!
    fileSizeFormatted: String!
  }

  input VideoDownloadInput {
    url: String
    duration: Int
    output: String
  }

  type Query {
    videoDownloads: [VideoDownload!]!
  }

  type Mutation {
    downloadVideo(input: VideoDownloadInput!): VideoDownloadResponse!
    downloadTrendingVideo(input: VideoDownloadInput!): VideoDownloadResponse!
  }
`;

export interface VideoDownload {
  id: string;
  url?: string;
  duration?: number;
  output: string;
  filePath: string;
  downloadUrl: string;
  fileName: string;
  fileSize: number;
  fileSizeFormatted: string;
  success: boolean;
  message: string;
  error?: string;
  createdAt: string;
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
  fileSize: number;
  fileSizeFormatted: string;
}
