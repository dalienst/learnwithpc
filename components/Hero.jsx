import Link from 'next/link';
import React from 'react';

function Hero() {
    return (
        <div className="flex justify-center bg-navy py-24 rounded-lg m-2 shadow">
            <div className="container">
                <h1 className="font-bold font-poppins text-white font-display text-4xl mb-3 text-center">
                    Elevate your programming skills to the next level
                </h1>
                <p className="text-white text-center font-poppins">
                    Computer Science modules to get you started on the right path. Curated for all levels: beginner, intermediate and advanced
                </p>
                <div className="flex justify-center mt-4">
                    <Link href="/courses" className="bg-white hover:bg-navy hover:text-white text-foreground font-bold rounded py-2 px-4">
                        Explore Courses
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Hero;
