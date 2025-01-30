import React from 'react';

export default function HomePageHero() {
  return (
    <>
      <video
        autoPlay
        muted={false}
        controls={false}
        className='absolute top-0 left-0 w-full h-full z-[-1] transition-opacity duration-500 ease-in-out bg-white'
        onClick={(e) => {
          const video = e.target as HTMLVideoElement;
          if (video.paused) {
            video.play();
          } else {
            video.pause();
          }
        }}
        onEnded={(e) => {
          const video = e.target as HTMLVideoElement;
          video.style.opacity = '0';
          setTimeout(() => {
            video.style.display = 'none';
          }, 500);
        }}>
        <source src='/IMG_5611.mp4' type='video/mp4' />
        Your browser does not support the video tag.
      </video>
    </>
  );
}
