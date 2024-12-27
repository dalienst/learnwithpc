'use client'

import { useFetchCourses } from "@/hooks/courses/actions"
import Image from "next/image";
import Link from "next/link";

function Courses() {
    const {isPending, data, error } = useFetchCourses();
    if (isPending) return <div className="h-[80vh] grid place-content-center">Loading...</div>
    if (error) return <div className="h-[80vh] grid place-content-center">Error: {error.message}</div>
    if (!data) return <div className="h-[80vh] grid place-content-center">No courses found</div>
  return (
    <div className="h-full pr-4 pt-6 pb-4">
        <div className="bg-blue-50 h-full rounded-xl px-4 md:px-4 p-8 overflow-auto">
            <div className="flex gap-5 justify-between items-center mb-5">
            <h1 className="text-2xl font-semibold">Your Courses</h1>
            <Link className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-800" href='/tutor/courses/new-course'>+ Add course</Link>
            </div>
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {!isPending && data?.map((item)=>(
                <li key={item.id} className="bg-white px-2 pt-4 pb-6 rounded-xl transition-all duration-300 hover:border-transparent hover:shadow-lg hover:scale-105 border-2 border-slate-200">
                    <div className="w-full rounded-lg h-[150px]">
                    <Image src={item.image} alt="course banner" width={300} height={150} className="object-contain w-[300px] h-[150px]"/>
                    </div>
                    <div className="mt-2">
                    <span className="block my-4">
                        <small className="bg-blue-50 rounded-full p-1 px-4 mr-2">{item.level}</small>
                        <small className="bg-blue-50 rounded-full p-1 px-4 mr-2">{item.method}</small>
                        <small className="bg-blue-50 rounded-full p-1 px-4 mr-2">{item.duration}</small>
                    </span>
                    <span className="block mx-3">{item.title}</span>
                    </div>
                </li>
                ))}
            </ul>
        </div>
    </div>
  )
}

export default Courses