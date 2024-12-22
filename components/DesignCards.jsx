'use client'
import '../styles/globals.css'; 
import React from 'react'

const DesignCards = () => {
  return (
    <>
      <section className=" mb-10 cards flex flex-wrap justify-center items-center gap-4">
        <a href="#" className="block w-full sm:w-auto max-w-sm p-6 hover:bg-white  hover:text-black rounded-lg shadow-xl dark:shadow-lg dark:shadow-indigo-500">
          <h5 className="mb-2 text-2xl font-bold tracking-tight">Low Poly Effects</h5>
          <p className="font-normal">started to design stuff, because i got bored.</p>
        </a>
        <a href="#" className="block w-full sm:w-auto max-w-sm p-6 hover:bg-white  hover:text-black rounded-lg shadow-xl dark:shadow-lg dark:shadow-indigo-500">
          <h5 className="mb-2 text-2xl font-bold tracking-tight">Isometric design</h5>
          <p className="font-normal">isometric cause i got a &quot;b&quot; in engineering graphics.</p>
        </a>

      </section>
    </>
  );
};

export default DesignCards;
