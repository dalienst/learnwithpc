'use client'

import { Icon } from "@iconify/react"
import Image from "next/image"
import Link from "next/link"
import { topics } from '@/data/topics'
import FeaturedCourses from "@/components/Courses"

function page() {
  return (
    <div>
    <div className="grid grid-cols-1 md:grid-cols-2 justify-between gap-5 px-4 lg:px-10 items-center">
        <div className="space-y-3">
            <h2 className="font-semibold text-orange-600">Unlock Your Potential</h2>
            <p className="font-bold text-4xl">Crafting a Better Life <br className="hidden lg:block"/> through Skill Development</p>
            <p>Explore our e-course platform and unlocj your full potential through skill development. Build a brighter future and transform your life with our engaging & transformative courses.</p>
            <Link href="/courses" className="block w-fit text-white bg-navy hover:bg-[#2d3b56] transition-all duration-300 rounded-md p-2">
                Explore Courses
            </Link>
        </div>
        <div className="w-full relative pt-[80%]">
            <Image 
            src='/hero.jpg'
            unoptimized 
            alt="hero image"  
          fill
          className="w-full h-full top-0 left-0 object-cover rounded-2xl"
            />
        </div>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 justify-between gap-5 px-4 lg:px-10 items-center my-20">
        <div className="grid grid-cols-1 md:grid-cols-2 justify-between gap-2 items-center">
            <div className="bg-navy text-white p-2 rounded-xl relative">
                <div className="grid grid-cols-3 gap-2">
                    <div className="col-span-2 row-span-2 reltive">
                        <Image src='/office2.jpg' alt="home" width={0} height={0} sizes="100vw" objectFit="cover" className="h-auto w-full rounded-lg" />
                    </div>
                    <div className="col-span-1 space-y-1">
                        <Image src='/office1.jpg' alt="home" width={0} height={0} sizes="100vw" objectFit="cover" className="h-auto w-full rounded-lg" />
                        <Image src='/office3.jpg' alt="home" width={0} height={0} sizes="100vw" objectFit="cover" className="h-auto w-full rounded-lg" />
                    </div>
                </div>
                <p className="font-semibold text-2xl">Study at the comfort <br className="hidden lg:block" /> of your home</p>
            </div>
            <div className="bg-slate-100 h-full rounded-xl p-2 flex flex-col gap-20 md:gap-0 justify-between">
                <p className="flex justify-between items-center">
                    <span className="bg-navy px-2 py-1 rounded-full">
                    <Icon icon="mynaui:video" width="1.2rem" height="1.2rem" color="white"/>
                    </span>
                    <span className="border border-navy rounded-full px-2 py-1">Online</span>
                </p>
                <p className="font-semibold text-2xl">The learning process made simple</p>
            </div>
        </div>
            <div className="grid grid-cols-3">
                <div className="flex flex-col gap-2 items-center">
                    <span className="font-bold text-2xl lg:text-3xl">20 +</span>
                    <span className="text-[#717171] text-center text-sm lg:text-base">Courses & subjects</span>
                </div>
                <div className="flex flex-col gap-2 items-center">
                    <span className="font-bold text-2xl lg:text-3xl">5k +</span>
                    <span className="text-[#717171] text-center text-sm lg:text-base">Monthly visits</span>
                </div>
                <div className="flex flex-col gap-2 items-center">
                    <span className="font-bold text-2xl lg:text-3xl">1k +</span>
                    <span className="text-[#717171] text-center text-sm lg:text-base">Happy students</span>
                </div>
            </div>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 justify-between items-center gap-5 px-4 lg:px-10 py-5 lg:py-10 bg-navy">
        <div className="text-white space-y-2">
            <h1 className="font-bold text-3xl lg:text-4xl">Most Popular Courses</h1>
            <p>Ready to level up your skills? Our most popular courses offer expert-led instruction and hands-on projects to help you succeed.</p>
            <ul className="list-inside tracking-wide leading-relaxed">
                <li className="flex gap-1 items-center"><Icon icon="pepicons-pop:checkmark-filled" width="1.2rem" height="1.2rem"  color="white" /> It&apos;s free</li>
                <li className="flex gap-1 items-center"><Icon icon="pepicons-pop:checkmark-filled" width="1.2rem" height="1.2rem"  color="white" /> Expert instructor</li>
                <li className="flex gap-1 items-center"><Icon icon="pepicons-pop:checkmark-filled" width="1.2rem" height="1.2rem"  color="white" /> Flexible learning</li>
                <li className="flex gap-1 items-center"><Icon icon="pepicons-pop:checkmark-filled" width="1.2rem" height="1.2rem"  color="white" /> Real world examples</li>
            </ul>
        </div>
        <div className="overflow-hidden">
            <ul className="grid grid-cols-2 lg:grid-cols-3 gap-2 overflow-auto scroll-py-20 snap-x">
                {topics.map((topic)=>(
                    <li key={topic.topic} className="snap-start flex-1 bg-white  border flex flex-col justify-between items-center p-4 rounded-xl">
                            <img src={topic.image} alt={topic.topic} className="object-cover" />
                        <p className="text-center font-sans font-semibold tracking-wide">{topic.topic}</p>
                    </li>
                ))}
            </ul>
        </div>
    </div>
    <FeaturedCourses/>
    </div>
  )
}

export default page