'use client'

import Navbar from "./navbar/Navbar"

function layout({children}) {
  return (
    <div className="flex h-screen">
    <aside className="w-[250px]">
      <Navbar/>
    </aside>
    <div className="flex-grow overflow-y-auto">{children}</div>
  </div>
  )
}

export default layout