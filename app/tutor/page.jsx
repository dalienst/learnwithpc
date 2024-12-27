'use client'

import { useFetchAccount } from "@/hooks/account/actions";
import Image from "next/image";
import { useState, useEffect } from "react";
import { AiOutlineSwapRight } from "react-icons/ai";
import Suggestions from "./suggestions/Suggestions";
import { FaUserAlt } from "react-icons/fa";
import Todos from "./todos/Todos";
import { useFetchTodos } from "@/hooks/todos/actions";
import CourseActivity from "./courses/courseActivity/CourseActivity";

function Tutor() {
  const [currentTime, setCurrentTime] = useState(null);
  const {isPending, data, error} = useFetchAccount();
  const {isPending:todosPending, data:todos, error:todoError, refetch:refetchTodos} = useFetchTodos();
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
    <CourseActivity formattedDate={formattedDate}/>
    <div className="pt-0 md:pt-8 mx-4 md:pr-8 overflow-hidden row-start-1 lg:row-start-auto">
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
      <Todos todos={todos} refetch={refetchTodos}/>
      <span className="text-[#818997] text-lg block mt-5 mb-2 font-semibold">AI Courses Suggestions</span>
      <Suggestions/>
    </div>
  </div>
  );
}

export default Tutor;
