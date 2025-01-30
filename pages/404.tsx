import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

const Custom404 = () => {
  const router = useRouter();

  return (
    <div className='flex flex-col items-center justify-center h-[calc(100vh-80px)] text-center pb-[40px]'>
      <h1 className='text-6xl mb-4'>404 - Page Not Found</h1>
      <p className='text-2xl mb-8'>Sorry, the page you are looking for does not exist.</p>
      <button
        className='px-4 py-2 text-lg bg-blue-500 text-white rounded mb-4'
        onClick={() => router.back()}>
        Go Back
      </button>

      <Link href='/' className='text-lg text-blue-500 underline'>
        Go to Home
      </Link>
    </div>
  );
};

export default Custom404;
