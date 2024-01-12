import React from 'react'

function Nav() {
  return (
    <nav className='hidden text-2xl h-full font-semibold lg:block'>
        <ul className='flex h-full'>
            <li className='border-l-2 border-gray-300 px-5 h-full hover:bg-pink-500 flex flex-col justify-center lg:px-8'><a href="">Home</a></li>
            <li className='border-l-2 border-gray-300 px-5 h-full hover:bg-pink-500 flex flex-col justify-center'><a href="">About</a></li>
            <li className='border-l-2 border-gray-300 px-5 h-full hover:bg-pink-500 flex flex-col justify-center'><a href="">Portfolio</a></li>
            <li className='border-l-2 border-gray-300 px-5 h-full hover:bg-pink-500 flex flex-col justify-center'><a href="">Contact</a></li>
            <li className='border-l-2 border-gray-300 px-5 h-full hover:bg-pink-500 flex flex-col justify-center underline'><a href="mailto:oezewi">Fire me an email</a></li>

            {/* <li className=''>Fire an email</li> */}

        </ul>
    </nav>
  )
}

export default Nav