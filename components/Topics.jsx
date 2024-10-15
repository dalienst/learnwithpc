"use client";
import { topics } from '@/data/topics'
import Image from 'next/image'
import React from 'react'

function Topics() {
    return (
        <div className="container mx-auto px-4 my-3 py-4 max-w-screen-xl">
            <h2 className="font-playfair text-center text-4xl font-bold">Featured Topics</h2>
            <div className="flex flex-wrap justify-center mt-4"> {/* Center the topics */}
                {topics?.map((topic) => (
                    <div key={topic.topic} className="bg-white shadow-md border rounded-lg m-4 p-4 flex flex-col items-center w-40 hover:shadow-lg transition-shadow duration-200"> {/* Card with fixed width and height */}
                        <Image src={topic.image} alt={topic.topic} width={90} height={90} className="mb-2" />
                        <h6 className="text-center font-sans">{topic.topic}</h6>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Topics
