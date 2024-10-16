"use client";
import { alevel } from '@/data/alevel'
import React from 'react'
import Link from 'next/link';
import CourseCard from '@/layouts/CourseCard';

function FeaturedCourses() {
    return (
        <div className="container mx-auto mb-3 px-4 py-3 max-w-screen-xl">
            <h2 className="font-lato text-center text-3xl font-bold">A-Level Courses</h2>
            <div className="flex flex-wrap justify-center">
                {alevel.map((course) => (
                    <CourseCard course={course} />
                ))}
            </div>
            <div className="flex justify-center mt-6">
                <Link href="/courses" className="text-center bg-foreground text-white rounded px-4 py-2 hover:bg-white hover:text-foreground hover:border hover:border-black font-bold">
                    All Courses
                </Link>
            </div>
        </div>
    )
}

export default FeaturedCourses;
