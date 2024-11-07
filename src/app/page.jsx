'use client';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import Link from "next/link";
import Footer from "../../components/Footer";
import '../app/globals.css';
import { useState, useEffect, useLayoutEffect } from "react";

export default function Home() {
  const [isdarkmode, SetIsDarkMode] = useState(false);

  const [text] = useTypewriter({
    words: [
      "Hello, I'm Dharun",
      "A Designer",
      "An Engineer",
      "A Developer"
    ],
    loop: true,
    typeSpeed: 100,
    deleteSpeed: 50,
    delaySpeed: 1000,
  });

  useLayoutEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      SetIsDarkMode(true);
      document.body.className = 'dark';
    } else {
      document.body.className = 'light';
    }
  }, []);

  const toggletheme = () => {
    const newTheme = !isdarkmode;
    SetIsDarkMode(newTheme);
    document.body.className = newTheme ? 'dark' : 'light';
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
  };

  return (
    <>
      <nav className="mt-12 mb-10 xs: text-lg flex gap-10 items-center justify-center ">
        <Link href="#">Home</Link>
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

      <h1 className="flex justify-center my-5 mt-0 text-2xl font-semibold">
        {text}
        <Cursor />
      </h1>

      <p className="text-center text-base md:text-lg px-4 sm:px-10 md:px-24 mb-5">
        I&apos;m a front-end developer with a keen eye for design and a passion for creating intuitive, user-focused digital experiences.
        Skilled in React, Tailwind CSS, and Next.js.
        With a foundation in UI/UX design, I bring visual storytelling to life through tools like Adobe Photoshop, Illustrator, and Canva.
        My journey extends to backend development, honing my skills in Python, C, and MongoDB.
      </p>
      
      <Footer />
    </>
  );
}
