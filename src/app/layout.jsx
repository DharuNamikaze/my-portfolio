// src/app/layout.js
import './globals.css';

if (typeof window !== 'undefined') {
  const savedTheme = localStorage.getItem('theme');
  document.body.className = savedTheme === 'dark' ? 'dark' : 'light';
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
