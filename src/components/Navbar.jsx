import React, { useState } from 'react';
import { BsPerson } from 'react-icons/bs';
import { AiOutlineClose } from 'react-icons/ai';
import { HiOutlineMenuAlt4 } from 'react-icons/hi';
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaPinterest,
  FaYoutube,
} from 'react-icons/fa';
import { Link } from 'react-scroll';


const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {setNav(!nav);};

  return (
    <div name="home" className='flex w-full justify-between items-center h-20 px-4 absolute z-10 text-white'>
      <div>
        <h1>VOYAGERR.</h1>
      </div>
      {/* menu */}
      <ul className='hidden md:flex'>
        <li>
          <Link to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to='destinations' smooth={true} duration={500}>
            Destination
          </Link>
        </li>
        <li>
          <Link to='travel' smooth={true} duration={500}>
            Travel
          </Link>
        </li>
        <li>
          <Link to='book' smooth={true} duration={500}>
            Book
          </Link>
        </li>
      </ul>
      <div className='hidden md:flex'>
        <BsPerson size={20} />
      </div>

      {/* Hamburger */}
      <div onClick={handleNav} className='md:hidden z-10'>
        {nav ? <AiOutlineClose className='text-black' size={20} /> : <HiOutlineMenuAlt4 size={20} />}
      </div>

      {/* Mobile menu dropdown */}
      <div onClick={handleNav} className={nav ? 'absolute text-black left-0 top-0 w-full bg-gray-100/90 px-4 py-7 flex flex-col' : 'absolute left-[-100%]'}>
        <ul>
          <h1>VOYAGERR.</h1>
          <li className='border-b'><Link onClick={handleNav} to='home' smooth={true} duration={500}>Home</Link></li>
          <li className='border-b'>{' '}<Link onClick={handleNav} to='destinations' smooth={true} duration={500}>Destinations</Link></li>
          <li className='border-b'>{' '}<Link onClick={handleNav} to='travel' smooth={true} duration={500}>Travel</Link></li>
          <li className='border-b'>{' '}<Link onClick={handleNav} to='book' smooth={true} duration={500}>Book</Link></li>
          <div className='flex flex-col space-x-4'>
            <button className='my-6'>Search</button>
            <button>Account</button>
          </div>
          <div className='flex justify-between my-6'>
            <FaFacebook className='icon' />
            <FaTwitter className='icon' />
            <FaYoutube className='icon' />
            <FaPinterest className='icon' />
            <FaInstagram className='icon' />
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;