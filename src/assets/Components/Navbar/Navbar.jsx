import React from 'react'
import logo from './logo.png';
import { useState,} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faClose } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom'
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);  

  return (
    <>
    <nav className=" z-50 flex flex-wrap justify-between items-center text-white px-0 pt-0 w-full bg-[#080E1C] fixed top-0 left-0 ">
    <span className="bg-white h-28 w-80 pt-7 pl-14 border-r-[10px] border-solid  border-[#3E66F3]"><img src={logo} /></span>

            {/* Hamburger Button */}
            <button
            onClick={() => setIsOpen(!isOpen)}
            className="block md:hidden focus:outline-none"
          >
            
            <FontAwesomeIcon className='text-xl mr-3 bg-blue-500 p-3 px-3 rounded' icon={faBars}/>
            
          </button>
          <ul className="hidden mt-4 md:mt-5 font-semibold text-center md:flex md:gap-6 px-0 mx-auto md:pb-6 bg-black bg-opacity-30 md:bg-transparent rounded-xl md:static w-auto">
          <Link to="/">
          <li className="text-md uppercase text-sm cursor-pointer text-white hover:text-[#3E66F3] transition-all duration-300 p-1 md:p-0">
           Home
          </li>
          </Link>

          <Link to="/careers">
          <li className="text-md uppercase text-sm cursor-pointer transition-all hover:text-[#3E66F3] duration-300 p-1 md:p-0">
            Careers
          </li>
          </Link>
          <Link to="/aboutus">
          <li className="text-md uppercase text-sm cursor-pointer transition-all hover:text-[#3E66F3] duration-300 p-1 md:p-0">
            About us
          </li>
          </Link>
          <Link to="/contactus"> 
          <li className="text-md uppercase text-sm cursor-pointer transition-all hover:text-[#3E66F3] duration-300 p-1 md:p-0">
            Contact us
          </li>
          </Link>
        </ul>
            
          {/* Sliding Menu */}
      <div
      className={`z-50 fixed top-0 left-0 h-full w-64 bg-white text-black transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-500 ease-in-out shadow-lg`}
    >
      {/* Logo on top */}
      <div className=" text-2xl font-bold border-[#E2E8FA] md:hidden ">
      <img className='bg-[#E2E8FA] p-11' src={logo} />
      </div>
      <FontAwesomeIcon
      className="cursor-pointer absolute  left-56 text-black text-2xl"
      onClick={() => setIsOpen(false)}
      icon={faClose}
    />
          {/* Menu Items */}
      <ul className="flex flex-col space-y-4 p-6">
        <Link>
        <li
          className="py-2 px-4 border-violet-600 cursor-pointer rounded"          
        >
          Home
        </li>
        </Link>

        <Link to="/careers">
        <li
          className="py-2 px-4 cursor-pointer rounded"       
        >
          Careers
        </li>
        </Link>
        <Link to="/aboutus">
        <li
           className="py-2 px-4 cursor-pointer rounded"
        >
          About Us
        </li>
        </Link>
        <Link to="/contactus">
        <li
          className="py-2 px-4 cursor-pointer rounded"
        >
          Contact Us
        </li>
        </Link>
      </ul>
    </div>
    
  </nav>

  </>
  )
}

export default Navbar