import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const tempDir = path.join(process.cwd(), 'public', 'temp-videos');

    // Check if temp directory exists
    if (!fs.existsSync(tempDir)) {
      return res.status(200).json({
        success: true,
        message: 'No temp videos directory found',
        deletedCount: 0
      });
    }

    const files = fs.readdirSync(tempDir);
    let deletedCount = 0;
    const deletedFiles: string[] = [];

    // Delete all files in temp-videos directory
    for (const file of files) {
      const filePath = path.join(tempDir, file);
      const stats = fs.statSync(filePath);

      // Only delete files (not directories)
      if (stats.isFile()) {
        fs.unlinkSync(filePath);
        deletedFiles.push(file);
        deletedCount++;
      }
    }

    console.log(`Cleaned up ${deletedCount} video files from temp-videos directory`);

    res.status(200).json({
      success: true,
      message: `Successfully cleaned up ${deletedCount} video files`,
      deletedCount,
      deletedFiles
    });
  } catch (error) {
    console.error('Error cleaning up videos:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to clean up videos',
      details: error instanceof Error ? error.message : 'Unknown error'
    });
  }
}
