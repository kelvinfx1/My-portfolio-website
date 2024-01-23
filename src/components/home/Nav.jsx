import React from 'react'

function Nav() {
  return (
    <nav className='hidden text-2xl h-full lg:block'>
        <ul className='flex h-full'>
            <li className='border-l border-borderColor px-12 h-full hover:bg-hoverColor flex flex-col justify-center lg:px-8'><a href="">Home</a></li>
            <li className='border-l border-borderColor px-12 h-full hover:bg-hoverColor flex flex-col justify-center'><a href="#about">About</a></li>
            <li className='border-l border-borderColor px-12 h-full hover:bg-hoverColor flex flex-col justify-center'><a href="#experience">Portfolio</a></li>
            <li className='border-l border-borderColor px-12 h-full hover:bg-hoverColor flex flex-col justify-center'><a href="">Contact</a></li>
            <li className='border-l border-borderColor px-12 h-full hover:bg-hoverColor flex flex-col justify-center underline'><a href="mailto:oezewi@gmail.com">Fire me an email</a></li>

            {/* <li className=''>Fire an email</li> */}

        </ul>
    </nav>
  )
}

export default Nav