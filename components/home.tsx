"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

const Main = () => {
    const titles = [
        "Learning Generative AI",
        "Frontend Developer",
        "Python Programmer",
        "C++ Programmer",
        "Aspiring Technologist",
    ];

    const [currentTitleIndex, setCurrentTitleIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
        }, 3000); // Change title every 3 seconds

        return () => clearInterval(interval);
    }, [titles.length]);

    return (  
        <div className="main flex text-base md:text-lg lg:text-xl">
            <div className='child-container1 w-3/5 h-full bg-white mt-[15%] mb-[18%] text-xl font-bold p-[20px]'>
                <h1 className='title1 slide-up text-[#8a0541] text-2xl' style={{ fontFamily: "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif" }}>
                    Hello, I&apos;m <strong className='title1 text-[#8a0541] text-3xl' style={{ fontFamily: "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif" }}>Muskaan Fayyaz</strong>
                </h1>
                <p>
                    I&apos;m a <strong className='text-[#8a0541] text-2xl' style={{ fontFamily: "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif" }}>{titles[currentTitleIndex]}</strong>,<br />
                </p>
                <br /><br />
                <a href="#skills" className='btn bg-[#8a0541] text-white py-2.5 px-5 border-none cursor-pointer text-base rounded-[10%] mr-2.5 duration-300 ease-in-out hover:bg-pink-950 transform hover:scale-105'>Skills</a>
                <a href="#projects" className='btn bg-[#8a0541] text-white py-2.5 px-5 border-none cursor-pointer text-base rounded-[10%] mr-2.5 duration-300 ease-in-out hover:bg-pink-950 transform hover:scale-105'>Projects</a>
            </div>
            <div className='child-container2 p-5 w-2/5 h-full bg-white mt-[8%] mb-[10%]'>
                <Image
                    src="/main.png"
                    alt="My Photo"
                    priority
                    className="mt-5 ml-10 rounded-[80%] transition-transform"
                    width={200} // Set width
                    height={200} // Set height
                />
            </div>
        </div>
    );
};

export default Main;

