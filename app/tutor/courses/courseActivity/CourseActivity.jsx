'use client'

import { useFetchCourses } from "@/hooks/courses/actions";
import Image from "next/image";
import { useEffect, useState } from "react";
import { AiOutlineSwapRight } from "react-icons/ai";


function CourseActivity({formattedDate}) {
      const {isPending, data, error } = useFetchCourses();
      const [courses, setCourses] = useState([]);
      useEffect(()=>{
        const courseActivity = data?.filter((course)=> course?.bookings?.length > 0)
        setCourses(courseActivity)
      },[data])
  return (
    <div className="bg-blue-50 rounded-xl mx-4 md:mx-0 pt-8 px-4 md:px-8 overflow-hidden">
          <span>
          <span className="text-2xl block font-semibold">Course Activity</span>
          <span className="text-blue-700 font-semibold">{formattedDate}</span>
          </span>
          <span className="text-[#818997] text-lg block mt-5 mb-2 font-semibold">Courses</span>
          <ul className="flex flex-col gap-3 h-[450px] pr-2 overflow-auto">
            {courses?.length > 0 ? 
            courses?.map((course)=>(
            <li key={course.slug} className='bg-blue-600 rounded-xl p-4'>
              <div className="flex justify-between gap-2 items-center">
              <Image src={course.image} alt="ai course" width={100} height={100}/>
              <div className="text-white">
                <p>{course.title}</p>
              </div>
              <div>
              <span className="grid place-content-center size-9 font-semibold rounded-md bg-white ">{course.bookings.length}</span>
                <span className="text-white text-sm">Booked</span>
              </div>
              </div>
              <span className="text-white flex items-end justify-end text-sm gap-1 py-2">See bookings <AiOutlineSwapRight size={20} color="white"/> </span>
            </li>
            ))
            :
            <span>You have no boked courses yet</span>
            }
          </ul>
        </div>
  )
}

export default CourseActivity