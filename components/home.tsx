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

    // Automatically switch titles every 3 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [titles.length]);

    return (
        <div className="main-container w-full min-h-screen bg-gray-50 overflow-x-hidden flex flex-col lg:flex-row items-center justify-center p-4 md:p-6 lg:p-10">
            {/* Left Section (Text Content) */}
            <div className="text-container w-full max-w-full text-center lg:text-left mt-4 mb-6 lg:mb-0 lg:mr-6 flex flex-col items-center lg:items-start">
                <h1
                    className="text-[#8a0541] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 slide-up"
                    style={{ fontFamily: "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif" }}
                >
                    Hello, I&apos;m <span className="text-[#8a0541]">Muskaan Fayyaz</span>
                </h1>
                <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-3">
                    I&apos;m a{" "}
                    <strong className="text-[#8a0541]">{titles[currentTitleIndex]}</strong>
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-3 sm:space-y-0 sm:space-x-4 mt-2">
                    <a
                        href="#skills"
                        className="btn bg-[#8a0541] text-white py-2 px-4 sm:px-5 md:py-3 md:px-6 rounded-md duration-300 ease-in-out hover:bg-pink-950 transform hover:scale-105"
                    >
                        Skills
                    </a>
                    <a
                        href="#projects"
                        className="btn bg-[#8a0541] text-white py-2 px-4 sm:px-5 md:py-3 md:px-6 rounded-md duration-300 ease-in-out hover:bg-pink-950 transform hover:scale-105"
                    >
                        Projects
                    </a>
                </div>
            </div>

            {/* Right Section (Image) */}
            <div className="image-container flex justify-center items-center w-full max-w-full lg:w-auto h-auto mt-6 lg:mt-0">
                <Image
                    src="/main.png"
                    alt="My Photo"
                    priority
                    className="rounded-full transition-transform duration-300 transform hover:scale-105"
                    width={350} // Increased the width for larger screens
                    height={350} // Increased the height for larger screens
                    sizes="(max-width: 320px) 180px, (max-width: 425px) 220px, (max-width: 768px) 250px, (max-width: 1024px) 300px, 350px"
                />
            </div>
        </div>
    );
};

export default Main;
