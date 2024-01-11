import React from 'react'

function Nav() {
  return (
    <nav className='hidden lg:block'>
        <ul className='nav-bar flex text-xl'>
            <li className='cursor-pointer border-l-[1px] border-gray-700 px-12 py-9 hover:bg-[rgb(78, 33, 114);]'><a href="">Home</a></li>
            <li className='cursor-pointer border-l-[1px] border-gray-700 px-12 py-9 hover:bg-[rgb(78, 233, 114)]'><a href="">About</a></li>
            <li className='cursor-pointer border-l-[1px] border-gray-700 px-12 py-9 hover:bg-[rgb(78, 233, 114)]'><a href="">Portfolio</a></li>
            <li className='cursor-pointer border-l-[1px] border-gray-700 px-12 py-9 hover:bg-[rgb(78, 233, 114)]'><a href="">Contact</a></li>
            <li className='cursor-pointer border-l-[1px] border-gray-700 px-12 py-9 hover:bg-[rgb(78, 233, 114)] underline whitespace-nowrap lg:hidden 2xl:block'><a href="">Fire me an email</a></li>

            <li className='cursor-pointer border-l-[1px] border-gray-700 px-3 py-9 hover:bg-[rgb(78, 233, 114)] underline whitespace-nowrap text-lg font-semibold 2xl:hidden'>Fire an email</li>

        </ul>
    </nav>
  )
}

export default Nav