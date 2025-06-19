import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Button from '@/components/atoms/Button';
import Text from '@/components/atoms/Text';

const Custom404 = () => {
  const router = useRouter();

  return (
    <div className='flex flex-col items-center justify-center min-h-[calc(100vh-80px)] text-center px-6'>
      <div className='card p-8 max-w-md'>
        <Text variant='display1' as='h1' className='mb-4'>
          404
        </Text>
        <Text variant='h2' as='h2' className='mb-2'>
          Page Not Found
        </Text>
        <Text variant='body1' as='p' className='mb-8'>
          Sorry, the page you are looking for does not exist.
        </Text>

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
