"use client";
import { alevel } from '@/data/alevel'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import { FaClipboard, FaClipboardCheck, FaClock } from 'react-icons/fa6';

function FeaturedCourses() {
    return (
        <div className="container mx-auto mb-3 px-4 py-3 max-w-screen-xl">
            <h2 className="font-poppins mt-10 mb-10 text-center text-3xl font-bold">A-Level Courses</h2>
            <div className="flex flex-wrap justify-center">
                {alevel.map((course) => (
                    <Link href={`/courses/${course.id}`} key={course.id} className="bg-white shadow border rounded-lg m-4 mx-2 p-6 flex flex-col items-center w-60 hover:shadow-lg hover:scale-105 transform transition-all duration-300 max-sm:w-full max-sm:mx-8">
                        <section className='w-full mb-4' style={{ height: '200px' }}>
                            <Image
                                src={course.image}
                                alt={course.title}
                                width={200}
                                height={200}
                                className="object-contain w-full h-full"
                            />
                        </section>
                        <div className="text-start w-full mb-4">
                            <h6 className="font-sans mb-2 font-semibold">{course.title}</h6>
                            <div className="flex justify-between items-center mb-2">
                                <div className="flex items-center space-x-2">
                                    <FaClock className='text-navy' />
                                    <p className="text-base">{course.duration}</p> {/* Text size bumped to base */}
                                </div>
                                <div className="flex items-center space-x-2">
                                    <FaClipboard className='text-navy' />
                                    <p className="text-base">{course.level}</p> {/* Text size bumped to base */}
                                </div>
                            </div>
                        </div>
                    </Link>

                ))}
            </div>
            <div className="flex justify-center mt-6 mb-6">
                <Link href="/courses" className="text-center bg-navy text-white rounded-lg px-4 py-2 hover:bg-navy/90 hover:border hover:border-b font-bold">
                    All Courses
                </Link>
            </div>
        </div>
    )
}

export default FeaturedCourses;
