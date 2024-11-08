// app/home/page.jsx
'use client'
import '../../styles/globals.css';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import Footer from '../../components/Footer';

export default function Home() {
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

  return (
    <>
      <h1 className="flex justify-center my-5 mt-0 text-2xl font-extrabold">
        {text}
        <Cursor />
      </h1>
      <p className="text-center text-base md:text-lg px-4 sm:px-10 md:px-24 mb-5">
        I&apos;m a front-end developer with a keen eye for design and a passion for creating intuitive, user-focused digital experiences.
        Skilled in React, Tailwind CSS, and Next.js.
        With a foundation in UI/UX design, I bring visual storytelling to life through tools like Adobe Photoshop, Illustrator, and Canva.
        My journey extends to backend development, honing my skills in Python, C, and MongoDB.
      </p>
      
      <Footer/>
    </>
  );
}
