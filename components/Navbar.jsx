"use client";
import Link from 'next/link';
import React, { useState } from 'react'

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-white shadow py-4">
            <div className="container-fluid px-3 mx-auto flex justify-between items-center">
                <Link href="/" className="font-bold text-2xl ">
                    Learn with PC
                </Link>

                {/* Hamburger Icon */}
                <div className="lg:hidden">
                    <button onClick={toggleMenu} className=" focus:outline-none">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
                        </svg>
                    </button>
                </div>

                {/* Menu Items (Large Screens) */}
                <ul className={`hidden lg:flex space-x-4`}>
                    <li>
                        <Link href="/" className=" hover:text-gray-300">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href="#" className=" hover:text-gray-300">
                            Courses
                        </Link>
                    </li>
                    <li>
                        <Link href="#" className=" hover:text-gray-300">
                            About
                        </Link>
                    </li>
                </ul>
            </div>

            {/* Dropdown Menu for Small Screens */}
            <div className={`${isOpen ? "block" : "hidden"} lg:hidden`}>
                <ul className="flex flex-col space-y-4 p-4">
                    <li>
                        <Link href="/" className=" hover:text-gray-300 block">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href="/blogs" className=" hover:text-gray-300 block">
                            Courses
                        </Link>
                    </li>
                    <li>
                        <Link href="/about" className=" hover:text-gray-300 block">
                            About
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar