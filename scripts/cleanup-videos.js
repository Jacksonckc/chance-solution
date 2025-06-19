#!/usr/bin/env node

/**
 * Video Cleanup Script
 * Removes old video files from the temp-videos directory
 * Can be run manually or scheduled with cron
 */

import fs from 'fs';
import path from 'path';

// Configuration
const TEMP_VIDEOS_DIR = path.join(__dirname, '..', 'public', 'temp-videos');
const MAX_AGE_HOURS = 24; // Delete files older than 24 hours
const DRY_RUN = process.argv.includes('--dry-run'); // Add --dry-run flag to preview without deleting

function cleanupVideos() {
  console.log('🧹 Starting video cleanup...');

  // Check if temp directory exists
  if (!fs.existsSync(TEMP_VIDEOS_DIR)) {
    console.log('📁 No temp videos directory found');
    return;
  }

  const files = fs.readdirSync(TEMP_VIDEOS_DIR);
  let deletedCount = 0;
  let skippedCount = 0;
  const now = Date.now();
  const maxAgeMs = MAX_AGE_HOURS * 60 * 60 * 1000;

  console.log(`📂 Found ${files.length} files in temp-videos directory`);
  console.log(`⏰ Will delete files older than ${MAX_AGE_HOURS} hours`);

  for (const file of files) {
    const filePath = path.join(TEMP_VIDEOS_DIR, file);
    const stats = fs.statSync(filePath);

    // Only process files (not directories)
    if (stats.isFile()) {
      const fileAge = now - stats.mtime.getTime();

      if (fileAge > maxAgeMs) {
        if (DRY_RUN) {
          console.log(
            `🗑️  [DRY RUN] Would delete: ${file} (${Math.round(fileAge / (1000 * 60 * 60))}h old)`
          );
        } else {
          try {
            fs.unlinkSync(filePath);
            console.log(`🗑️  Deleted: ${file} (${Math.round(fileAge / (1000 * 60 * 60))}h old)`);
            deletedCount++;
          } catch (error) {
            console.error(`❌ Failed to delete ${file}:`, error.message);
          }
        }
      } else {
        console.log(`⏳ Skipping: ${file} (${Math.round(fileAge / (1000 * 60 * 60))}h old)`);
        skippedCount++;
      }
    }
  }

  if (DRY_RUN) {
    console.log(
      `\n✅ [DRY RUN] Would have deleted ${deletedCount} files, skipped ${skippedCount} files`
    );
  } else {
    console.log(
      `\n✅ Cleanup complete! Deleted ${deletedCount} files, skipped ${skippedCount} files`
    );
  }
}

// Run cleanup
try {
  cleanupVideos();
} catch (error) {
  console.error('❌ Cleanup failed:', error.message);
  process.exit(1);
}
