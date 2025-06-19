import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Button from '@/components/common/Button';

const Custom404 = () => {
  const router = useRouter();

  return (
    <div className='flex flex-col items-center justify-center min-h-[calc(100vh-80px)] text-center px-6'>
      <div className='card p-8 max-w-md'>
        <h1 className='text-6xl mb-4 font-display' style={{ color: 'var(--color-text)' }}>
          404
        </h1>
        <h2 className='text-2xl mb-2 font-semibold' style={{ color: 'var(--color-text)' }}>
          Page Not Found
        </h2>
        <p className='text-lg mb-8' style={{ color: 'var(--color-text-light)' }}>
          Sorry, the page you are looking for does not exist.
        </p>

        <div className='flex flex-col sm:flex-row gap-4 justify-center'>
          <Button className='btn-primary' onClick={() => router.back()}>
            Go Back
          </Button>

          <Link href='/'>
            <Button className='btn-secondary' onClick={() => {}}>
              Go to Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Custom404;
