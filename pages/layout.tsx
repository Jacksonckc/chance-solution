import Header from '@/components/header/Header'; // Adjust the import path as necessary

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div
      className='relative transition-colors duration-200'
      style={{ backgroundColor: 'var(--color-background)' }}>
      <Header />
      <main className='max-h-[calc(100vh-80px)] h-[calc(100vh-80px)] overflow-scroll'>
        {children}
      </main>
    </div>
  );
}
