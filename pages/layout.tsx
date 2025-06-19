import Header from '@/components/header/Header'; // Adjust the import path as necessary

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div
      className='relative min-h-screen transition-colors duration-200'
      style={{ backgroundColor: 'var(--color-background)' }}>
      <Header />
      <main className='pt-[80px]'>{children}</main>
    </div>
  );
}
