"use client";
import Link from 'next/link';
import React from 'react'
import { FaSquareFacebook, FaXTwitter, FaLinkedin } from "react-icons/fa6";

function Footer() {
    return (
        <footer className="bg-navy text-white py-3">
            <div className="container mx-auto px-4 text-center">
                <h6 className="font-playfair text-2xl font-semibold mb-2">Learn with Mr. PC</h6>
                <p className="text-sm mb-6">Elevate your skills, one lesson at a time.</p>
                <div className="flex justify-center space-x-6 mb-4">
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
                <p className="text-xs text-gray-400">© 2024 Learn with Mr. PC. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer;
