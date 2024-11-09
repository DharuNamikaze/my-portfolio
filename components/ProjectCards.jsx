'use client'
import '../styles/globals.css'; 
import React from 'react'

const ProjectCards = () => {
  return (
    <>
      <section className="cards flex flex-wrap justify-center items-center gap-4">
        <a href="#" className="block w-full sm:w-auto max-w-sm p-6 hover:bg-white  hover:text-black rounded-lg shadow-xl dark:shadow-lg dark:shadow-indigo-500">
          <h5 className="mb-2 text-2xl font-bold tracking-tight">CellSaver</h5>
          <p className="font-normal">Python-based application designed to monitor laptop battery wear level and notify users when performance declines.</p>
        </a>

        <a href="#" className="block w-full sm:w-auto max-w-sm p-6 hover:bg-white  hover:text-black rounded-lg shadow-xl dark:shadow-lg dark:shadow-indigo-500">
          <h5 className="mb-2 text-2xl font-bold tracking-tight">SmartPick</h5>
          <p className="font-normal">Smartpick is a personalized chatbot helps users by recommending tech product based on their preferences and needs.</p>
        </a>

        <a href="#" className="block w-full sm:w-auto max-w-sm p-6 hover:bg-white  hover:text-black rounded-lg shadow-xl dark:shadow-lg dark:shadow-indigo-500">
          <h5 className="mb-2 text-2xl font-bold tracking-tight">typeD</h5>
          <p className="font-normal">A Minimalistic Typing Test App, Inspired by Monkeytype. to showcase Javascript Skills</p>
        </a>

        <a href="#" className="block w-full sm:w-auto max-w-sm p-6 hover:bg-white  hover:text-black rounded-lg shadow-xl dark:shadow-lg dark:shadow-indigo-500">
          <h5 className="mb-2 text-2xl font-bold tracking-tight">SudokuSolver</h5>
          <p className="font-normal">A New way of solving partial sudoku puzzles without backtracking.</p>
        </a>

        <a href="#" className="block w-full sm:w-auto max-w-sm p-6 hover:bg-white  hover:text-black rounded-lg shadow-xl dark:shadow-lg dark:shadow-indigo-500">
          <h5 className="mb-2 text-2xl font-bold tracking-tight">Sorter</h5>
          <p className="font-normal">Visualizing Sortiong alogirthms, A Unique way to understand how sorting works in dsa.</p>
        </a>
      </section>
    </>
  );
};

export default ProjectCards;
