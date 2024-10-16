import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function CourseCard({ course }) {
    return (
        <>
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


                    {/* <div className="flex flex-wrap gap-2 mt-2"> 
                                {course.tags.map((tag) => (
                                    <span key={tag} className="bg-ginger text-white text-xs px-2 py-1 rounded-full hover:bg-ginger/90">
                                        {tag}
                                    </span>
                                ))}
                            </div> */}
                </div>
            </Link>
        </>
    )
}

export default CourseCard