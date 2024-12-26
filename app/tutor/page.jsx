'use client'

import { useFetchAccount } from "@/hooks/account/actions";
import Image from "next/image";
import { useState, useEffect } from "react";
import { AiOutlineSwapRight } from "react-icons/ai";
import Suggestions from "./suggestions/Suggestions";
import { FaUserAlt } from "react-icons/fa";

function Tutor() {
  const [currentTime, setCurrentTime] = useState(null);
  const {isPending, data, error} = useFetchAccount();
  useEffect(() => {
    const updateTime = () => {
      setCurrentTime(new Date());
    };
    updateTime();
    const timerId = setInterval(updateTime, 1000);
    return () => clearInterval(timerId);
  }, []);

  const formattedDate = currentTime?.toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
  if (isPending) return <div className="h-screen grid place-content-center">Loading...</div>
  if (error) return <div className="h-screen grid place-content-center">Error: {error.message}</div>
  if (!data) return <div className="h-screen grid place-content-center">No user found</div>
  return (
    <div className="flex-grow lg:h-full grid grid-cols-1 lg:grid-cols-2 gap-5 py-5">
    <div className="bg-blue-50 rounded-xl pt-8 px-8 overflow-hidden">
      <span>
      <span className="text-2xl block font-semibold">Course Activity</span>
      <span className="text-blue-700 font-semibold">{formattedDate}</span>
      </span>
      <span className="text-[#818997] text-lg block mt-5 mb-2 font-semibold">Courses</span>
      <ul className="flex flex-col gap-3 h-[450px] pr-2 overflow-auto">
        <li className="bg-blue-600 rounded-xl p-4">
          <div className="flex justify-between gap-2 items-center">
          <Image src='/ai.svg' alt="ai course" width={100} height={100}/>
          <div className="text-white">
            <p>Artificial Intelligence</p>
          </div>
          <div>
          <span className="grid place-content-center size-9 font-semibold rounded-md bg-white ">12</span>
            <span className="text-white text-sm">Booked</span>
          </div>
          </div>
          <span className="text-white flex items-end justify-end text-sm gap-1 py-2">See bookings <AiOutlineSwapRight size={20} color="white"/> </span>
        </li>
        <li className="bg-purple-400 rounded-xl p-4">
          <div className="flex justify-between gap-2 items-center">
          <Image src='/ml.png' alt="ai course" width={100} height={100}/>
          <div className="text-white">
            <p>Hardware and Virtual Machines</p>
          </div>
          <div>
          <span className="grid place-content-center size-9 font-semibold rounded-md bg-white ">8</span>
            <span className="text-white text-sm">Booked</span>
          </div>
          </div>
          <span className="text-white flex items-end justify-end text-sm gap-1 py-2">See bookings <AiOutlineSwapRight size={20} color="white"/> </span>
        </li>
        <li className="bg-yellow-400 rounded-xl p-4">
          <div className="flex justify-between gap-2 items-center">
          <Image src='/vault.svg' alt="ai course" width={100} height={100}/>
          <div className="text-white">
            <p>Computer Security</p>
          </div>
          <div>
          <span className="grid place-content-center size-9 font-semibold rounded-md bg-white ">1</span>
            <span className="text-white text-sm">Booked</span>
          </div>
          </div>
          <span className="text-white flex items-end justify-end text-sm gap-1 py-2">See bookings <AiOutlineSwapRight size={20} color="white"/> </span>
        </li>
        <li className="bg-orange-400 rounded-xl p-4">
          <div className="flex justify-between gap-2 items-center">
          <Image src='/web.svg' alt="ai course" width={100} height={100}/>
          <div className="text-white">
            <p>Further programming</p>
          </div>
          <div>
          <span className="grid place-content-center size-9 font-semibold rounded-md bg-white ">2</span>
            <span className="text-white text-sm">Booked</span>
          </div>
          </div>
          <span className="text-white flex items-end justify-end text-sm gap-1 py-2">See bookings <AiOutlineSwapRight size={20} color="white"/> </span>
        </li>
      </ul>
    </div>
    <div className="pt-8 pr-8 overflow-hidden row-start-1 lg:row-start-auto">
      <div className="flex justify-between gap-5">
        <span className="">
          <span className='text-[15px] font-semibold'>{formattedDate}</span>
          <small className='text-[#818997] block leading-none'>{currentTime !== null && currentTime?.toLocaleTimeString()}</small>
        </span>
        <div className="flex gap-4">
          <span>
            <span className="font-semibold text-[15px]">{data?.name}</span>
            <small className="text-blue-600 block leading-none font-semibold">Tutor</small>
          </span>
          <div className="grid place-content-center size-10 bg-blue-50 rounded-lg">
            <FaUserAlt size={28} fill="#797979"/>
          </div>
        </div>
      </div>
      <span className="text-[#818997] text-lg block mt-5 mb-2 font-semibold">My todos</span>
      <ul className="w-3/4 flex flex-col text-sm text-navy gap-3 h-fit max-h-[150px] px-4 border-l-4 border-blue-600 p-2 rounded-xl overflow-auto">
      <li className="flex gap-2 items-center">
      ~ Internet of things (IoT)
      </li>
      <li className="flex gap-2 items-center">
      ~ Write on the basics of blockchain technology
      </li>
      <li className="flex gap-2 items-center">
      ~ View all my bookings
      </li>
      </ul>
      <span className="text-[#818997] text-lg block mt-5 mb-2 font-semibold">AI Courses Suggestions</span>
      <Suggestions/>
    </div>
  </div>
  );
}

export default Tutor;
