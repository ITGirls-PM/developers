'use client';
import './globals.scss';
import Header from '@/components/Header';
import { Suspense, useEffect, useState } from 'react';
import Loader from '@/components/Loader/Loader';

// export const metadata = {
//   title: 'George Lambert',
//   description: 'Личная страница Георга',
// };

export default function RootLayout({ children }) {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  }, []);
  return (
    <html lang='ru' style={{ scrollBehavior: 'smooth' }} className='html'>
      <link rel='icon' href='/images/favicon.ico' sizes='any' />
      <body className='body'>
        {loading ? (
          <Loader />
        ) : (
          <Suspense fallback={<div>Loading</div>}>
            <Header />
            {children}
          </Suspense>
        )}
      </body>
    </html>
  );
}
