import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div className= 'bg-white justify-between xs:justify-end flex pr-4 items-center'>
      <div
        className="w-full p-2 text-3xl font-medium overflow-hidden flex items-center"
        style={{ minBlockSize: 64 }}
      >
        <Link className="hidden text-slate-400 md:flex" href={'/'}>
          Kanvas
        </Link>
        <Link className="flex md:hidden" href="/">
          KS
        </Link>
      </div>
      <div className='w-10 h-10 rounded-[50%] bg-orange-500 drop-shadow-lg'>
        
      </div>
    </div>
  )
}

export default Header