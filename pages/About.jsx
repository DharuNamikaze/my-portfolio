'use client'
import React, { useEffect } from 'react'
import "../src/app/globals.css"

const About = () => {

  useEffect(()=>{
    const savedTheme = localStorage.getItem('theme');
    if(savedTheme=='dark'){
      document.body.className = 'dark';
    } else{
      document.body.className ='light';
    }
  },[]);

  return (
    <>
    <section className='m-10 p-10'>
    <h1 className="about m-10 p-10 text-2xl font-bold">About Me</h1>
    <p>Check out my <a href="../assets/Dharun-Resume.pdf" target='_blank' rel="noopener noreferrer" >Resume</a></p>
    </section>

    </>
  )
}
export default About