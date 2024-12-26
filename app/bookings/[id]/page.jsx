'use client'

import { useClientGetBookingDetail } from "@/hooks/bookings/actions"
import extractDate from "@/hooks/useDateFormat";
import { FaRegCalendarAlt } from "react-icons/fa";
import { IoMdCheckmarkCircle } from "react-icons/io";
import { IoBookOutline } from "react-icons/io5";
import { MdOutlinePendingActions } from "react-icons/md";

function Booking({params:{id}}) {
    const{isPending, data, error} = useClientGetBookingDetail(id);
    if (isPending) return <div className="h-screen grid place-content-center">Loading...</div>
    if (error) return <div className="h-screen grid place-content-center">Error: {error.message}</div>
    if (!data) return <div className="h-screen grid place-content-center">No booking details found</div>
    console.log(data)
  return (
    <div className="h-[80vh] md:grid md:place-content-center">
        <div className="md:border rounded-xl p-4">
            <h1 className="flex gap-2 items-center justify-center mb-8 font-semibold text-2xl text-navy"><IoMdCheckmarkCircle fill="green" />Booking confirmed</h1>
            <div className="bg-blue-50 mb-4 rounded-xl p-4 flex flex-col gap-2">
                <span className="font-semibold text-navy">Congratulations {data?.name}!</span>
                <span className="text-[#797979]">Your course has been successfully booked.</span>
                <span className="font-semibold text-navy">Booking ID: <small>{data?.reference}</small></span>
                <span className="font-semibold text-navy">Booked on: <span className="text-sm">{extractDate(data?.created_at)}</span> </span>
            </div>
            <span className="font-semibold text-navy">Booking Details</span>
            <ul className="flex flex-col gap-3 mt-3">
                <li className="flex gap-2 text-[#797979]">
                <IoBookOutline className="flex-shrink-0" size={20}/>
                <span className="leading-none flex flex-col gap-1 font-semibold">Course booked <span className="text-navy">{data?.course_details?.title}</span></span>
                </li>
                <li className="flex gap-2 text-[#797979]">
                <FaRegCalendarAlt className="flex-shrink-0" size={20}/>
                <span className="leading-none flex flex-col gap-1 font-semibold">Your preferred time <span className="text-navy">{data?.preferred_time}</span></span>
                </li>
                <li className="flex gap-2 text-[#797979]">
                <MdOutlinePendingActions className="flex-shrink-0" size={20}/>
                <span className="leading-none flex flex-col gap-1 font-semibold">Booking status<span className="text-navy">{data?.status}</span></span>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Booking