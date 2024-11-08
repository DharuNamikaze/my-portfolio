// app/layout.jsx
'use client';
import './globals.css';
import Link from 'next/link';
import { useState, useLayoutEffect } from 'react';

export default function RootLayout({ children }) {
  const [isdarkmode, setIsDarkMode] = useState(false);

  useLayoutEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDarkMode(true);
      document.body.className = 'dark';
    } else {
      document.body.className = 'light';
    }
  }, []);

  const toggletheme = () => {
    const newTheme = !isdarkmode;
    setIsDarkMode(newTheme);
    document.body.className = newTheme ? 'dark' : 'light';
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
  };

  return (
    <html lang="en">
            <body>
        <nav className="mt-12 mb-10 xs:text-lg flex gap-10 items-center justify-center">
          <Link href="/">Home</Link>
          <Link href="/About">About</Link>
          <Link href="/Works">Works</Link>
          <button onClick={toggletheme} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
            {isdarkmode ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 3V1M12 23v-2M4.22 4.22l-1.42 1.42M18.36 18.36l-1.42 1.42M1 12h2m18 0h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42M12 7a5 5 0 100 10 5 5 0 000-10z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21.752 15.002A9 9 0 1112 2.248 9 9 0 0021.752 15z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            )}
          </button>
        </nav>
        
        <main>{children}</main>
      </body>
    </html>
  );
}
