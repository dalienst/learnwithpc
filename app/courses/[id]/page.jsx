"use client";
import CourseDetailHero from '@/components/courses/CourseDetailHero';
import { allcourses } from '@/data/allcourses';
import React from 'react'

function CourseDetail({ params: { id } }) {
    const course = allcourses?.find((course) => course.id === id)

    return (
        <>
            <CourseDetailHero course={course} />
            <main className="container mx-auto mb-3 px-4 py-3 max-w-screen-xl">
                <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <div className='mb-4'>
                            <h5 className='text-3xl font-semibold'>Content in this course</h5>
                            <ul className="list-disc list-inside px-4">
                                {course?.content?.map((item) => (
                                    <li key={item} className='mb-1'>{item}</li>
                                ))}
                            </ul>
                        </div>

                        <div className='mb-4'>
                            <h5 className='text-3xl font-semibold'>What you'll learn</h5>
                            <ol className="list-decimal list-inside px-4">
                                {course?.what_you_will_learn?.map((item) => (
                                    <li key={item} className='mb-1'>{item}</li>
                                ))}
                            </ol>
                        </div>
                    </div>

                    <div>
                        <div className='mb-4'>hello</div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default CourseDetail