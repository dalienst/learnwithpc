"use client";
import Link from 'next/link';
import React from 'react';
import { FaSquareFacebook, FaXTwitter, FaLinkedin } from "react-icons/fa6";

function Footer() {
    return (
        <footer className="flex flex-col sm:flex-row justify-between items-center px-5 space-y-4 sm:space-y-0 bg-navy text-white py-5 mb-0">
                <h1 className="font-poppins text-sm mb-2 sm:mb-0">Learn with Mr. PC</h1>
                <div className="flex justify-center space-x-2">
                    {/* Replace '#' with actual links */}
                    <Link href="#" className="hover:text-cream">
                        <FaSquareFacebook />
                    </Link>
                    <Link href="#" className="hover:text-cream">
                        <FaLinkedin />
                    </Link>
                    <Link href="#" className="hover:text-cream">
                        <FaXTwitter />
                    </Link>
                </div>
        </footer>
    );
}

export default Footer;
