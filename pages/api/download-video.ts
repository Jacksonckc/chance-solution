import { NextApiRequest, NextApiResponse } from 'next';
import { exec } from 'child_process';
import { promisify } from 'util';
import path from 'path';
import fs from 'fs';

const execAsync = promisify(exec);

async function checkAndInstallDependencies(): Promise<boolean> {
  try {
    // Check if yt-dlp is installed
    await execAsync('python3 -c "import yt_dlp"');
    await execAsync('python3 -c "import requests"');
    return true;
  } catch (error) {
    console.log('Error checking dependencies:', error);
    console.log('Installing Python dependencies...');
    try {
      const requirementsPath = path.join(process.cwd(), 'requirements.txt');
      await execAsync(`pip3 install -r "${requirementsPath}"`);
      return true;
    } catch (installError) {
      console.error('Failed to install dependencies:', installError);
      return false;
    }
  }
}

function getTempVideoFolder(): string {
  // Create a temp folder for videos in the public directory
  const tempDir = path.join(process.cwd(), 'public', 'temp-videos');

  // Ensure the temp folder exists
  if (!fs.existsSync(tempDir)) {
    fs.mkdirSync(tempDir, { recursive: true });
  }

  return tempDir;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Check and install dependencies first
    const depsReady = await checkAndInstallDependencies();
    if (!depsReady) {
      return res.status(500).json({
        success: false,
        error: 'Failed to install required Python dependencies'
      });
    }

    const { url, duration, output } = req.body;

    // Get the temp video folder
    const tempDir = getTempVideoFolder();

    // Generate output filename with timestamp
    const timestamp = Date.now();
    const outputFilename = output || `video_${timestamp}.mp4`;
    const outputPath = path.join(tempDir, outputFilename);

    // Path to the Python script in the scripts folder
    const scriptPath = path.join(process.cwd(), 'scripts', 'script.py');

    // Build command arguments
    let command = `python3 "${scriptPath}" --output "${outputPath}"`;

    if (url) {
      command += ` --url "${url}"`;
    }

    // Only add duration if it's provided and greater than 0
    if (duration && duration > 0) {
      command += ` --duration ${duration}`;
    }

    console.log('Executing command:', command);

    const { stdout, stderr } = await execAsync(command);

    if (stderr) {
      console.error('Script stderr:', stderr);
    }

    console.log('Script stdout:', stdout);

    // Check if file was created successfully
    if (fs.existsSync(outputPath)) {
      const fileStats = fs.statSync(outputPath);
      const downloadUrl = `/temp-videos/${outputFilename}`;

      res.status(200).json({
        success: true,
        message: 'Video download completed successfully',
        output: stdout,
        error: stderr || null,
        filePath: outputPath,
        downloadUrl: downloadUrl,
        fileName: outputFilename,
        fileSize: fileStats.size,
        fileSizeFormatted: formatFileSize(fileStats.size)
      });
    } else {
      res.status(500).json({
        success: false,
        error: 'Video file was not created successfully'
      });
    }
  } catch (error) {
    console.error('Error executing Python script:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to download video',
      details: error instanceof Error ? error.message : 'Unknown error'
    });
  }
}

function formatFileSize(bytes: number): string {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}
