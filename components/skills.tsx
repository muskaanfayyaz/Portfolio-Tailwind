import React from 'react';
import { FaHtml5, FaCss3Alt, FaBootstrap, FaJsSquare, FaPython } from 'react-icons/fa';
import { SiTypescript } from 'react-icons/si'; 
import Image from 'next/image'; 

const Skills = () => {
  return (
    <div className="skills-container text-base sm:text-sm md:text-lg lg:text-xl p-6 sm:p-8 md:p-14 bg-gradient-to-b from-primary to-white h-full text-center w-full m-0 rounded-[10px]">
      <h1 className="skills-title text-secondary font-bold text-2xl sm:text-xl md:text-3xl mb-5">My Skills</h1>
      <div className="skills-grid grid grid-cols-3 sm:grid-cols-2 gap-4 sm:gap-6">
        <div className="skill-item bg-primary text-secondary p-4 sm:p-5 rounded-lg translate-x-1 flex justify-center flex-col items-center hover:scale-105">
          <FaHtml5 className="skill-icon text-3xl mb-3" /> HTML
        </div>
        <div className="skill-item bg-primary text-secondary p-4 sm:p-5 rounded-lg translate-x-1 flex justify-center flex-col items-center hover:scale-105">
          <FaCss3Alt className="skill-icon text-3xl mb-3" /> CSS
        </div>
        <div className="skill-item bg-primary text-secondary p-4 sm:p-5 rounded-lg translate-x-1 flex justify-center flex-col items-center hover:scale-105">
          <FaBootstrap className="skill-icon text-3xl mb-3" /> Bootstrap
        </div>
        <div className="skill-item bg-primary text-secondary p-4 sm:p-5 rounded-lg translate-x-1 flex justify-center flex-col items-center hover:scale-105">
          <Image 
            src="/nextjs.jpeg" 
            alt="Next.js" 
            width={60} 
            height={60} 
            className="skill-icon" 
          />
          Next.js
        </div>
        <div className="skill-item bg-primary text-secondary p-4 sm:p-5 rounded-lg translate-x-1 flex justify-center flex-col items-center hover:scale-105">
          <Image 
            src="/tailwindcss.png" 
            alt="Tailwind CSS" 
            width={60} 
            height={60} 
            className="skill-icon" 
          />
          Tailwind CSS
        </div>
        <div className="skill-item bg-primary text-secondary p-4 sm:p-5 rounded-lg translate-x-1 flex justify-center flex-col items-center hover:scale-105">
          <FaJsSquare className="skill-icon text-3xl mb-3" /> JavaScript
        </div>
        <div className="skill-item bg-primary text-secondary p-4 sm:p-5 rounded-lg translate-x-1 flex justify-center flex-col items-center hover:scale-105">
          <Image 
            src="/C++.png" 
            alt="C++" 
            width={60} 
            height={60} 
            className="skill-icon" 
          />
          C++
        </div>
        <div className="skill-item bg-primary text-secondary p-4 sm:p-5 rounded-lg translate-x-1 flex justify-center flex-col items-center hover:scale-105">
          <FaPython className="skill-icon text-3xl mb-3" /> Python
        </div>
        <div className="skill-item bg-primary text-secondary p-4 sm:p-5 rounded-lg translate-x-1 flex justify-center flex-col items-center hover:scale-105">
          <SiTypescript className="skill-icon text-3xl mb-3" /> TypeScript
        </div>
      </div>
    </div>
  );
};

export default Skills;
