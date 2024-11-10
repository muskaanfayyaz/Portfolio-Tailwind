"use client";
import React, { useState } from 'react';
import Link from 'next/link';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow z-[1000]">
      <div className="flex justify-between items-center p-4 max-w-7xl mx-auto">
        {/* Logo or Brand */}
        <div className="text-pink-800 text-lg font-bold">My Portfolio</div>
        
        {/* Hamburger Menu Icon (Visible on mobile) */}
        <button
          className="block lg:hidden text-pink-800 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>

        {/* Navigation Links */}
        <nav
          className={`lg:flex lg:items-center lg:space-x-6 ${
            isOpen ? 'block' : 'hidden'
          }`}
        >
          <ul className="flex flex-col lg:flex-row lg:space-x-6 mt-4 lg:mt-0 text-center text-pink-800 font-bold text-base md:text-lg lg:text-xl">
            <li className="hover:underline decoration-solid">
              <Link href="#home">Home</Link>
            </li>
            <li className="hover:underline decoration-solid">
              <Link href="#skills">Skills</Link>
            </li>
            <li className="hover:underline decoration-solid">
              <Link href="#projects">Projects</Link>
            </li>
            <li className="hover:underline decoration-solid">
              <Link href="#contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
