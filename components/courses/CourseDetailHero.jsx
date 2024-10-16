"use client";
import React from 'react'

function CourseDetailHero({ course }) {
    return (
        <div className="m-auto flex justify-center bg-navy py-12">
            <div className="container">
                <h1 className='font-bold font-playfair text-white font-display text-4xl mb-3 text-center'>{course?.title}</h1>
                <div className="flex justify-center gap-2 flex-wrap">
                    <p className='text-navy text-xs rounded-full bg-white px-2 py-1'>{course?.duration}</p>
                    <p className='text-navy text-xs rounded-full bg-white px-2 py-1'>{course?.level}</p>
                    <p className='text-navy text-xs rounded-full bg-white px-2 py-1'>{course?.method}</p>
                </div>
            </div>
        </div>
    )
}

export default CourseDetailHero