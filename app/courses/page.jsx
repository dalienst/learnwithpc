"use client";
import Hero from '@/components/courses/Hero'
import { allcourses } from '@/data/allcourses'
import CourseCard from '@/layouts/CourseCard'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

function Courses() {
  return (
    <>
      <Hero />
      <main className="container mx-auto mb-3 px-4 py-3 max-w-screen-xl">
        <div className="flex flex-wrap justify-center">
          {allcourses?.map((course) => (
            <Link href="#" key={course.id} className="bg-white shadow border m-4 mx-2 p-4 flex flex-col items-center w-60 hover:shadow-lg transition-shadow duration-200 max-sm:w-full max-sm:mx-8"> {/* Card styling */}
              <section className='w-full mb-3' style={{ height: '200px' }}>
                <Image
                  src={course.image}
                  alt={course.title}
                  width={200}
                  height={200}
                  className="mb-4 object-contain w-full h-full"
                />
              </section>
              <div className="text-start w-full mb-2">
                <h6 className="font-sans mb-2 font-semibold">{course.title}</h6>
                <p className="text-sm">{course.duration}</p>
                <p className="text-sm">{course.level}</p>
                <p className="text-sm">{course.method}</p>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </>
  )
}

export default Courses