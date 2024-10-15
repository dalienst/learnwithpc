import Link from 'next/link';
import React from 'react';

function Hero() {
    return (
        <div className="m-auto flex justify-center bg-ginger py-24">
            <div className="container">
                <h1 className="font-bold text-cream font-display text-4xl mb-3 text-center">
                    Elevate your programming skills to the next level
                </h1>
                <p className="text-cream text-center">
                    Computer Science modules to get you started on the right path. Curated for all levels: beginner, intermediate and advanced
                </p>
                <div className="flex justify-center mt-4"> {/* Added this flex container */}
                    <Link href="#" className="bg-cream hover:bg-cream/90 text-foreground font-bold py-2 px-4">
                        Get Started
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Hero;
