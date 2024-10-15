import FeaturedCourses from '@/components/Courses'
import Hero from '@/components/Hero'
import Topics from '@/components/Topics'
import React from 'react'

function Home() {
  return (
    <>
      <Hero />
      <Topics />
      <FeaturedCourses />
    </>
  )
}

export default Home