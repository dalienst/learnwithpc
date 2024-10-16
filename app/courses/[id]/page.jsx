"use client";
import CourseDetailHero from '@/components/courses/CourseDetailHero';
import { allcourses } from '@/data/allcourses';
import React from 'react'

function CourseDetail({ params: { id } }) {
    const course = allcourses?.find((course) => course.id === id)

    return (
        <>
            <CourseDetailHero course={course} />
        </>
    )
}

export default CourseDetail