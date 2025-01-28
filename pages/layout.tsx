import Header from '@/components/header/Header'; // Adjust the import path as necessary

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
}
