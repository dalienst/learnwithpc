"use client";
import Hero from '@/components/courses/Hero'
import { allcourses } from '@/data/allcourses'
import CourseCard from '@/layouts/CourseCard'
import React from 'react'

function Courses() {
  return (
    <>
      <Hero />
      <main className="container mx-auto px-4 py-3 max-w-screen-xl">
        <CourseCard courses={allcourses} />
      </main>
    </>
  )
}

export default Courses