"use client";
import React from 'react'

function CourseDetailHero({ course }) {
    return (
        <div className="flex justify-center bg-navy py-24 rounded-lg m-2 shadow">
            <div className="container mx-auto px-4 max-w-screen-xl">
                <h1 className='font-bold font-playfair text-white font-display text-4xl mb-3 text-center'>{course?.title}</h1>
                <div className="flex justify-center gap-2 flex-wrap">
                    <p className='text-navy text-base rounded-lg bg-white px-4 hover:bg-navy hover:border hover:border-white hover:text-white py-1'>{course?.duration}</p>
                    <p className='text-navy text-base rounded-lg bg-white px-4 hover:bg-navy hover:border hover:border-white hover:text-white py-1'>{course?.level}</p>
                    <p className='text-navy text-base rounded-lg bg-white px-4 hover:bg-navy hover:border hover:border-white hover:text-white py-1'>{course?.method}</p>
                </div>
            </div>
        </div>
    )
}

export default CourseDetailHero