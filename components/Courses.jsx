"use client";
import { alevel } from '@/data/alevel'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link';

function FeaturedCourses() {
    return (
        <div className="container mx-auto px-4 py-4 max-w-screen-xl">
            <h2 className="font-lato text-center text-3xl font-bold">A-Level Courses</h2>
            <div className="flex flex-wrap justify-center mt-4">
                {alevel.map((course) => (
                    <div key={course.id} className="bg-white shadow border m-4 mx-2 p-4 flex flex-col items-center w-60 hover:shadow-lg transition-shadow duration-200"> {/* Card styling */}
                        <div className='w-full mb-3' style={{ height: '200px' }}>
                            <Image
                                src={course.image}
                                alt={course.title}
                                width={200}
                                height={200}
                                className="mb-4 object-contain w-full h-full"
                            />
                        </div>
                        <div className="text-start w-full mb-2">
                            <h6 className="font-sans mb-2 font-semibold">{course.title}</h6>
                            <p className="text-base">{course.duration}, {course.level}</p>
                            <p className="text-base">{course.method}</p>

                            <Link href="#"></Link>

                            {/* <div className="flex flex-wrap gap-2 mt-2"> 
                                {course.tags.map((tag) => (
                                    <span key={tag} className="bg-ginger text-white text-xs px-2 py-1 rounded-full hover:bg-ginger/90">
                                        {tag}
                                    </span>
                                ))}
                            </div> */}
                        </div>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default FeaturedCourses;
