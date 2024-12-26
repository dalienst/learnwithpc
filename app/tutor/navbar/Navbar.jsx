'use client'
import { signOut } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'
import { IoMdAdd, IoMdClose } from 'react-icons/io'
import { IoBookOutline, IoMenu } from 'react-icons/io5'
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
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className='px-2 relative h-full flex md:flex-col border-b md:border-none py-5'>
      <div className='flex justify-between items-center w-full'>
        <Link href="/" className=''>
        <Image src="/logo.svg" alt="logo" width={220} height={150} />
      </Link>
      <button onClick={()=>setMenuOpen((prev)=>!prev)}  className='md:hidden'>
        {menuOpen ? <IoMdClose /> : <IoMenu /> }
      </button>
      </div>
      <div className='hidden px-2 flex-grow md:flex flex-col justify-between mt-10'>
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
      <button className='bg-navy text-white rounded-lg p-2 flex items-center gap-1 w-full justify-center' onClick={() => signOut()}><MdLogout />Log out</button>
      </div>
      {menuOpen && <div className={`absolute ${menuOpen ? 'top-[82px] ' : 'top-[-1000px] '} border-b-2 transition-transform duration-300 ease-in-out md:hidden bg-white z-50 pb-10 w-full left-0 pl-4`}>
      <ul className="flex flex-col gap-4">
        {links.map((link)=>(
          <li key={link.label} onClick={()=>setMenuOpen(false)}>
             <Link href={link.href} className='flex items-center gap-2'>
           <span className={`grid place-content-center size-8 rounded-lg ${pathname === link.href ? ' text-white bg-blue-600 shadow-blue-400 shadow-md' : ''}`}>{link.icon}</span>
           <span className={`${pathname === link.href ? 'text-blue-600 ' : ' '}'font-semibold'`}>{link.label}</span>
           </Link>
          </li>
        ))}
      </ul>
      </div>}
    </nav>
  )
}

export default Navbar