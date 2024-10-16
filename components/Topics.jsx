"use client";
import { topics } from '@/data/topics'
import Image from 'next/image'
import React from 'react'

function Topics() {
    return (
        <div className="container mx-auto px-4 py-3 max-w-screen-xl">
            <h2 className="font-lato text-center text-3xl font-semibold">Featured Topics</h2>
            <div className="flex flex-wrap justify-center"> {/* Center the topics */}
                {topics?.map((topic) => (
                    <div key={topic.topic} className="bg-white shadow border m-4 mx-2 p-4 flex flex-col items-center w-40 hover:shadow-lg transition-shadow duration-200"> {/* Card with fixed width and height */}
                        <Image src={topic.image} alt={topic.topic} width={90} height={90} className="mb-2" />
                        <h6 className="text-center font-sans">{topic.topic}</h6>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Topics
