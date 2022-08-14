import React from 'react'
import { RiArrowDropDownLine } from "react-icons/ri";

const Navbar = () => {
  return (
    <div className=''>
        <nav className='flex justify-between pt-5 pb-5 max-w-7xl mx-auto'>
            <div className='items-start font-bold '>
                <h1>BFQ10Automated system</h1>
            </div>
            <div>
                <ul className='hidden md:inline-flex items-center font-bold space-x-5'>
                    <li>Market</li>
                    <li>Workflow</li>
                    <li>People</li>
                </ul>
            </div>
            <div className='flex justify-between '>
            <RiArrowDropDownLine fontSize={35} />
            <img
              className="rounded-full  h-12 w-12 object-cover"
              src="https://raw.githubusercontent.com/OloriAsabi/book-images/main/src/me/IMG-4060.JPG"
              alt="user-profile"
            />
            </div>
        </nav>
    </div>
  )
}

export default Navbar