'use client'

import { useFetchCourseDetail } from "@/hooks/courses/actions"

function CourseBookings({params:{booking}}) {
    const {isPending, data, error} = useFetchCourseDetail(booking)
    if (isPending) return <div className="h-screen grid place-content-center">Loading...</div>
    console.log(data,'booking details')
  return (
    <div className="h-full px-2 pt-6 pb-4">
        <div className="bg-blue-50 h-full rounded-xl px-4 md:px-4 p-8 overflow-hidden">
        <h1 className="font-semibold text-2xl">Course: {data?.title}</h1>
        <h1 className="font-semibold text-lg">Bookings for this course</h1>
        <div className="overflow-x-auto">
        <table className="border mt-5">
          <thead>
            <tr>
              <td className="px-4 border font-semibold">#</td>
              <td className="px-4 border font-semibold">Name</td>
              <td className="px-4 border font-semibold">Email</td>
              <td className="px-4 border font-semibold">Contact</td>
              <td className="px-4 border font-semibold">Year group</td>
              <td className="px-4 border font-semibold">Preferred time</td>
            </tr>
          </thead>
          <tbody>
          {data?.bookings?.map((booking,index)=>(
            <tr key={booking.slug} className="">
              <td className="px-4 border">{index+1}</td>
              <td className="px-4 border">{booking?.name}</td>
              <td className="px-4 border">{booking?.email}</td>
              <td className="px-4 border">{booking?.contact}</td>
              <td className="px-4 border">{booking?.year_group}</td>
              <td className="px-4 border">{booking?.preferred_time}</td>
            </tr>
          ))}
          </tbody>
        </table>
        </div>
        </div>
    </div>
  )
}

export default CourseBookings