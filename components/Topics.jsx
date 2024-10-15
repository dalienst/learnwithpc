"use client";
import { topics } from '@/data/topics'
import Image from 'next/image'
import React from 'react'

function Topics() {
    return (
        <div className="container mx-auto mt-3 py-9 px-9">
            <h2 className="font-playfair text-center text-4xl font-bold">Featured Topics</h2>
            <div className="flex flex-wrap justify-center mt-4"> {/* Center the topics */}
                {topics?.map((topic) => (
                    <div key={topic.topic} className="flex flex-col items-center mx-2 mb-6 bg-white shadow border rounded p-4 w-36 h-36 flex-grow justify-center"> {/* Card with fixed width and height */}
                        <Image src={topic.image} alt={topic.topic} width={90} height={90} className="mb-2" />
                        <h6 className="text-center">{topic.topic}</h6>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Topics
