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
      <h1 className="flex justify-center mb-5 xs:text-4xl md:text-6xl lg:text-8xl xl:text-9xl font-extrabold">
        {text}
        <Cursor />
      </h1>
      <p className=" px-8 items-center text-center text-base md:text-lg xl:px-32 md:px-14 mb-5">
        I&apos;m a front-end developer with a keen eye for design and a passion for creating intuitive, user-focused digital experiences.
        Skilled in React, Tailwind CSS, and Next.js.
        With a foundation in UI/UX design, I bring visual storytelling to life through tools like Adobe Photoshop, Illustrator, and Canva.
        My journey extends to backend development, honing my skills in Python, C, and MongoDB.
      </p>
      <Footer/>
    </>
  );
}
