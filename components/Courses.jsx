"use client";
import { alevel } from '@/data/alevel'
import React from 'react'
import Image from 'next/image'

function FeaturedCourses() {
    return (
        <div className="container mx-auto px-4 my-3 py-4 max-w-screen-xl">
            <h2 className="font-playfair text-center text-4xl font-bold">A-Level Courses</h2>
            <div className="flex flex-wrap justify-center mt-4">
                {alevel.map((course) => (
                    <div key={course.id} className="bg-white shadow-md border rounded-lg m-4 p-4 flex flex-col items-center w-60 hover:shadow-lg transition-shadow duration-200"> {/* Card styling */}
                        <Image
                            src={course.image}
                            alt={course.title}
                            width={100}
                            height={100}
                            className="mb-4 object-contain" // Center the image
                        />
                        <div className="text-start w-full mb-2">
                            <h6 className="font-sans mb-2">{course.title}</h6>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default FeaturedCourses;
