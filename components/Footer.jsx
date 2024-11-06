// components/Footer.js
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className='foot p-20 text-center'>
      <div className='flex justify-center gap-2'>
        <Link href="https://github.com/yourusername" target="_blank" aria-label="GitHub">
          <svg width="24" height="24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M12 .297a12 12 0 00-3.793 23.419c.6.111.82-.256.82-.571 0-.282-.011-1.03-.017-2.021-3.338.729-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73 1.205.084 1.839 1.238 1.839 1.238 1.07 1.835 2.809 1.304 3.494.997.108-.776.42-1.304.763-1.604-2.665-.3-5.466-1.332-5.466-5.931 0-1.31.469-2.381 1.236-3.22-.123-.302-.536-1.519.117-3.165 0 0 1.008-.322 3.3 1.23a11.484 11.484 0 016.003 0c2.29-1.553 3.297-1.23 3.297-1.23.653 1.646.241 2.863.118 3.165.77.839 1.234 1.91 1.234 3.22 0 4.61-2.805 5.628-5.475 5.921.43.37.824 1.102.824 2.222 0 1.605-.015 2.896-.015 3.293 0 .317.217.687.825.571A12 12 0 0012 .297z"/>
          </svg>
        </Link>

        <Link href="https://linkedin.com/in/yourusername" target="_blank" aria-label="LinkedIn">
          <svg width="24" height="24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M19 0H5C2.238 0 0 2.238 0 5v14c0 2.762 2.238 5 5 5h14c2.762 0 5-2.238 5-5V5c0-2.762-2.238-5-5-5zM7.357 20H4.426V8.574h2.931V20zM5.891 7.363a1.665 1.665 0 110-3.33 1.665 1.665 0 010 3.33zM20 20h-2.938v-5.734c0-1.367-.027-3.124-1.905-3.124-1.909 0-2.203 1.491-2.203 3.024V20h-2.938V8.574h2.818v1.558h.04c.393-.746 1.352-1.53 2.78-1.53 2.972 0 3.516 1.956 3.516 4.505V20z"/>
          </svg>
        </Link>

        <Link href="https://twitter.com/yourusername" target="_blank" aria-label="Twitter">
          <svg width="24" height="24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M24 4.557a9.926 9.926 0 01-2.827.775A4.932 4.932 0 0023.337 3.2a9.864 9.864 0 01-3.127 1.196 4.916 4.916 0 00-8.38 4.482A13.933 13.933 0 011.671 3.149a4.916 4.916 0 001.523 6.574A4.903 4.903 0 01.964 9.24v.061a4.916 4.916 0 003.946 4.827 4.93 4.93 0 01-2.212.084 4.918 4.918 0 004.596 3.417 9.867 9.867 0 01-6.102 2.104c-.396 0-.79-.023-1.177-.069a13.933 13.933 0 007.548 2.211c9.057 0 14.004-7.506 14.004-14.004 0-.213-.005-.425-.014-.636A10.005 10.005 0 0024 4.557z"/>
          </svg>
        </Link>
      </div>
      <p style={{ marginTop: '10px' }}>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
    </footer>
  );
};

const socialLinks = {
  display: 'flex',
  justifyContent: 'center',
  gap: '20px',
};

export default Footer;
