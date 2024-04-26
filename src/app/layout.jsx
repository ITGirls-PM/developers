'use client';
import './globals.scss';
import Header from '@/components/Header';
import { useEffect, useState } from 'react';
import Loader from '@/components/Loader/Loader';

export default function RootLayout({ children }) {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  }, []);
  return (
    <html lang="ru" style={{ scrollBehavior: 'smooth' }} className="html">
      <head>
        <title>RemoteLamas</title>
        <meta name="description" content="Личная страница Георга" />
        <link rel="icon" href="/images/favicon.ico" sizes="any" />
      </head>

      <body className="body">
        {loading ? (
          <Loader />
        ) : (
          <>
            <Header />
            {children}
          </>
        )}
      </body>
    </html>
  );
}
