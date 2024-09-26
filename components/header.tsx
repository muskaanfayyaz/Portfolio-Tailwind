import React from 'react';
import Link from 'next/link';

const Header = () => {
return (
    <header className='text-pink-800 text-base md:text-lg lg:text-xl text-center fixed top-0 left-0 w-full bg-white z-[1000] shadow-slate-50 list-none p-0 flex justify-center m-1 '>
        <nav className='list-none p-0 flex justify-center m-1 '>
        <ul className='list-none p-0 flex justify-center m-1 '>
            <li className='m-1 hover:underline decoration-solid mr-3 font-bold'><Link href="#home">Home</Link></li>
            <li className='m-1 hover:underline decoration-solid mr-3 font-bold'><Link href="#skills">Skills</Link></li>
            <li className='m-1 hover:underline decoration-solid mr-3 font-bold'><Link href="#projects">Projects</Link></li>
            <li className='m-1 hover:underline decoration-solid mr-3 font-bold'><Link href="#contact">Contact</Link></li>

        </ul>
        </nav>
    </header>
);
};

export default Header;
