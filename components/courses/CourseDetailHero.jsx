"use client";
import React from 'react'

function CourseDetailHero({ course }) {
    return (
        <div className="m-auto flex justify-center bg-navy py-24">
            <div className="container mx-auto px-4 max-w-screen-xl">
                <h1 className='font-bold font-playfair text-white font-display text-4xl mb-3'>{course?.title}</h1>
                <div className="flex justify-start gap-2 flex-wrap">
                    <p className='text-navy text-xl rounded-full bg-white px-4 py-1'>{course?.duration}</p>
                    <p className='text-navy text-xl rounded-full bg-white px-4 py-1'>{course?.level}</p>
                    <p className='text-navy text-xl rounded-full bg-white px-4 py-1'>{course?.method}</p>
                </div>
            </div>
        </div>
    )
}

export default CourseDetailHero