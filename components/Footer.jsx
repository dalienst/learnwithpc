"use client";
import Link from 'next/link';
import React from 'react';
import { FaSquareFacebook, FaXTwitter, FaLinkedin } from "react-icons/fa6";

function Footer() {
    return (
        <footer className="border-t mb-0">
            <div className="flex flex-col sm:flex-row justify-between items-center px-2 py-2 space-y-4 sm:space-y-0">
                <h6 className="font-poppins text-sm mb-2 sm:mb-0">Learn with Mr. PC</h6>
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
            </div>
        </footer>
    );
}

export default Footer;
