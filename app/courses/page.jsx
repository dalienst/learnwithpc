"use client";
import Hero from '@/components/courses/Hero';
import { allcourses } from '@/data/allcourses';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { FaClipboard, FaClock } from 'react-icons/fa6';

function Courses() {
  const [searchQuery, setSearchQuery] = useState('');

  // Filter courses based on search query
  const filteredCourses = allcourses.filter((course) =>
    course.title.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
      <main className="container mx-auto mb-3 px-4 py-3 max-w-screen-xl">
        {/* Aligning All Courses and Search Bar */}
        <div className='flex flex-col sm:flex-row justify-center md:px-8 sm:justify-between items-center sm:items-start mb-6 w-full'>
          <h4 className="text-2xl font-bold mb-4 sm:mb-0">All Courses</h4>
          <div className="w-full sm:w-auto">
            <form className="w-full sm:w-auto">
              <input
                type="search"
                name="search"
                id="search"
                className="border px-4 py-2 w-full sm:w-auto rounded-md"
                placeholder="Search courses..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)} // Update search query on input change
              />
            </form>
          </div>
        </div>

        {/* Course Cards */}
        <div className="flex flex-wrap justify-center">
          {filteredCourses?.map((course) => (
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
                    <p className="text-base">{course.duration}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <FaClipboard className='text-navy' />
                    <p className="text-base">{course.level}</p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
  );
}

export default Courses;
