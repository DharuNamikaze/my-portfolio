// src/app/layout.js
import './globals.css';
import { Poppins } from '@next/font/google';

const poppins = Poppins({
  subsets: ['latin'],   // Choose your subsets
  weight: ['400', '700'] // Choose the font weights you need
});

if (typeof window !== 'undefined') {
  const savedTheme = localStorage.getItem('theme');
  document.body.className = savedTheme === 'dark' ? 'dark' : 'light';
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}