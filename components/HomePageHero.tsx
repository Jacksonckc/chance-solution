import React from 'react';
import Button from './common/Button';
import Text from './common/Text';

export default function HomePageHero() {
  return (
    <div className='min-h-screen flex items-center justify-center'>
      <div className='text-center max-w-4xl mx-auto px-6'>
        <Text variant='display1' as='h1' className='mb-6 font-bold'>
          Welcome to <span style={{ color: 'var(--color-primary)' }}>Chan&apos;ce Solution</span>
        </Text>

        <Text
          variant='body1'
          as='p'
          className='mb-8 leading-relaxed'
          style={{ color: 'var(--color-text-light)' }}>
          Your comprehensive web solution for business needs. From video downloads to custom
          applications, we&apos;ve got you covered.
        </Text>

        <div className='flex flex-col sm:flex-row gap-4 justify-center'>
          <Button
            className='btn-primary text-lg px-8 py-4'
            onClick={() => (window.location.href = '/downloadVideo')}>
            Try Video Downloader
          </Button>

          <Button
            className='btn-secondary text-lg px-8 py-4'
            onClick={() => (window.location.href = '/about')}>
            Learn More
          </Button>
        </div>

        <div className='mt-12 grid grid-cols-1 md:grid-cols-3 gap-6'>
          <div className='card p-6 text-center'>
            <div className='text-4xl mb-4'>🎥</div>
            <Text variant='h3' as='h3' className='mb-2'>
              Video Downloads
            </Text>
            <Text variant='body2' style={{ color: 'var(--color-text-light)' }}>
              Download YouTube videos with ease. Support for specific URLs and trending videos.
            </Text>
          </div>

          <div className='card p-6 text-center'>
            <div className='text-4xl mb-4'>⚡</div>
            <Text variant='h3' as='h3' className='mb-2'>
              Fast & Reliable
            </Text>
            <Text variant='body2' style={{ color: 'var(--color-text-light)' }}>
              High-quality downloads with customizable duration and format options.
            </Text>
          </div>

          <div className='card p-6 text-center'>
            <div className='text-4xl mb-4'>🎨</div>
            <Text variant='h3' as='h3' className='mb-2'>
              Beautiful UI
            </Text>
            <Text variant='body2' style={{ color: 'var(--color-text-light)' }}>
              Modern interface with multiple themes and dark mode support.
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
}
