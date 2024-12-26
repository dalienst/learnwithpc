'use client'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { IoMdAdd } from 'react-icons/io'
import { IoBookOutline } from 'react-icons/io5'
import { MdLogout, MdOutlineDashboard } from 'react-icons/md'

const links = [
  {
    label: 'Dashboard',
    href: '/tutor',
    icon: <MdOutlineDashboard />
  },
  {
    label: 'Courses',
    href: '/tutor/courses',
    icon: <IoBookOutline />
  },
  {
    label: 'New Course',
    href: '/tutor/courses/new-course',
    icon: <IoMdAdd  />
  }
]

function Navbar() {
  const pathname = usePathname();

  return (
    <nav className='px-2 h-full flex flex-col py-5'>
        <Link href="/" className=''>
        <Image src="/logo.svg" alt="logo" width={220} height={150} />
      </Link>
      <div className='px-2 flex-grow flex flex-col justify-between mt-10'>
      <ul className="flex flex-col gap-4">
        {links.map((link)=>(
          <li key={link.label}>
             <Link href={link.href} className='flex items-center gap-2'>
           <span className={`grid place-content-center size-8 rounded-lg ${pathname === link.href ? ' text-white bg-blue-600 shadow-blue-400 shadow-md' : ''}`}>{link.icon}</span>
           <span className={`${pathname === link.href ? 'text-blue-600 ' : ' '}'font-semibold'`}>{link.label}</span>
           </Link>
          </li>
        ))}
      </ul>
      <button className='bg-navy text-white rounded-lg p-2 flex items-center gap-1 w-full justify-center'><MdLogout />Log out</button>
      </div>
    </nav>
  )
}

export default Navbar