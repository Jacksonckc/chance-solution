#!/usr/bin/env python3
"""
YouTube Most Viewed Video Downloader
Downloads the most viewed YouTube video of the day and extracts the first 5 minutes
"""

import os
import sys
import subprocess
import json
import requests
from datetime import datetime
import argparse
from pathlib import Path

def check_dependencies():
    """Check if required dependencies are installed"""
    try:
        import yt_dlp
        return True
    except ImportError:
        print("yt-dlp is not installed. Installing...")
        subprocess.run([sys.executable, "-m", "pip", "install", "yt-dlp"], check=True)
        return True

def get_trending_videos():
    """Get trending videos from YouTube"""
    try:
        # Use yt-dlp to get trending videos
        ydl_opts = {
            'quiet': True,
            'no_warnings': True,
            'extract_flat': True,
        }
        
        import yt_dlp
        with yt_dlp.YoutubeDL(ydl_opts) as ydl:
            # Get trending videos from different regions
            trending_urls = [
                "https://www.youtube.com/feed/trending",
                "https://www.youtube.com/feed/trending?bp=4gINGgt5dG1hX2NoYXJ0cw%3D%3D",  # Music
                "https://www.youtube.com/feed/trending?bp=4gIcGhpnYW1pbmdfY29ycHVzX21vc3RfcG9wdWxhcg%3D%3D"  # Gaming
            ]
            
            all_videos = []
            for url in trending_urls:
                try:
                    result = ydl.extract_info(url, download=False)
                    if 'entries' in result:
                        all_videos.extend(result['entries'])
                except Exception as e:
                    print(f"Error fetching from {url}: {e}")
                    continue
            
            return all_videos
    except Exception as e:
        print(f"Error getting trending videos: {e}")
        return []

def get_most_viewed_video(videos):
    """Get the video with the highest view count"""
    if not videos:
        return None
    
    # Filter out videos without view count and sort by views
    videos_with_views = [v for v in videos if v.get('view_count')]
    
    if not videos_with_views:
        # If no view count available, return the first video
        return videos[0]
    
    # Sort by view count (descending)
    most_viewed = max(videos_with_views, key=lambda x: x.get('view_count', 0))
    return most_viewed

def download_video_segment(video_url, output_path, duration=None):
    """
    Download a YouTube video or a segment of it
    
    Args:
        video_url: YouTube video URL
        output_path: Output file path
        duration: Duration in seconds to download (None = entire video)
    """
    ydl_opts = {
        'format': 'best[height<=1080]',  # Best quality up to 1080p
        'outtmpl': output_path,
        'quiet': False,
        'no_warnings': False,
        'cookiesfrombrowser': ('chrome',),  # Use cookies from Chrome browser
        'postprocessors': [{
            'key': 'FFmpegVideoConvertor',
            'preferedformat': 'mp4',
        }],
    }
    
    # Only add duration limit if specified
    if duration and duration > 0:
        ydl_opts['external_downloader'] = 'ffmpeg'
        ydl_opts['external_downloader_args'] = {
            'ffmpeg_i': ['-ss', '0', '-t', str(duration)]
        }
    
    try:
        import yt_dlp
        with yt_dlp.YoutubeDL(ydl_opts) as ydl:
            if duration and duration > 0:
                print(f"Downloading first {duration//60} minutes of: {video_url}")
            else:
                print(f"Downloading entire video: {video_url}")
            ydl.download([video_url])
            print(f"Download completed! Saved to: {output_path}")
            return True
    except Exception as e:
        print(f"Error downloading video: {e}")
        
        # If cookies failed, try without cookies
        if "Sign in to confirm you're not a bot" in str(e):
            print("Trying without browser cookies...")
            ydl_opts.pop('cookiesfrombrowser', None)
            try:
                with yt_dlp.YoutubeDL(ydl_opts) as ydl:
                    if duration and duration > 0:
                        print(f"Downloading first {duration//60} minutes of: {video_url}")
                    else:
                        print(f"Downloading entire video: {video_url}")
                    ydl.download([video_url])
                    print(f"Download completed! Saved to: {output_path}")
                    return True
            except Exception as e2:
                print(f"Error downloading video (without cookies): {e2}")
                return False
        return False

def main():
    parser = argparse.ArgumentParser(description='Download most viewed YouTube video of the day (first 5 minutes)')
    parser.add_argument('--output', '-o', default='most_viewed_video.mp4', 
                       help='Output file path (default: most_viewed_video.mp4)')
    parser.add_argument('--duration', '-d', type=int, default=None,
                       help='Duration in seconds to download (default: None = entire video)')
    parser.add_argument('--url', '-u', 
                       help='Direct YouTube URL (if not provided, will fetch trending videos)')
    
    args = parser.parse_args()
    
    # Check dependencies
    if not check_dependencies():
        print("Failed to install required dependencies")
        return
    
    # Create output directory if it doesn't exist
    output_dir = Path(args.output).parent
    output_dir.mkdir(parents=True, exist_ok=True)
    
    if args.url:
        # Use provided URL
        video_url = args.url
        video_title = "Custom Video"
    else:
        # Get trending videos and find most viewed
        print("Fetching trending videos...")
        videos = get_trending_videos()
        
        if not videos:
            print("No trending videos found. Please check your internet connection.")
            return
        
        most_viewed = get_most_viewed_video(videos)
        
        if not most_viewed:
            print("No suitable video found.")
            return
        
        video_url = most_viewed.get('url')
        video_title = most_viewed.get('title', 'Unknown Title')
        view_count = most_viewed.get('view_count', 'Unknown')
        
        print(f"Most viewed video found:")
        print(f"Title: {video_title}")
        print(f"Views: {view_count}")
        print(f"URL: {video_url}")
    
    # Download the video segment
    success = download_video_segment(video_url, args.output, args.duration)
    
    if success:
        if args.duration and args.duration > 0:
            print(f"\n✅ Successfully downloaded first {args.duration//60} minutes!")
        else:
            print(f"\n✅ Successfully downloaded entire video!")
        print(f"📁 File saved as: {args.output}")
        print(f"📊 Video: {video_title}")
    else:
        print("❌ Failed to download video")

if __name__ == "__main__":
    main()
