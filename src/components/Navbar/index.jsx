'use client'
// import logo from '../../assets/ABDM_English_Logo_with_tagline_aea4f8d600.png'
// import hamburger from '../../assets/Hamburger_icon.svg.png'
import Dropdown from './Dropdown'
import Link from 'next/link'
import React from 'react'
export default function NavBar () {
  return (
    <nav className="w-screen bg-uhigreen top-0 relative">
      <div className="container mx-auto py-1 flex font-sans justify-between items-center">
        <ul className="hidden md:flex space-x-10 text-xl font-myText">
          <Link href="/">
            <li className="hover:font-bold hover:bg-green-500 hover:rounded-full text-2xl p-2">Home</li>
          </Link>

          <li>
            <Dropdown />
          </li>
          <li className="hover:font-bold hover:bg-green-500 hover:rounded-full text-2xl p-2">Documentation</li>
          <li className="hover:font-bold hover:bg-green-500 hover:rounded-full text-2xl p-2">FAQs</li>
          <li className="hover:font-bold hover:bg-green-500 hover:rounded-full text-2xl p-2">Contact Us</li>
          <Link href="/onboarding/user">
            <li className="hover:font-bold hover:bg-green-500 hover:rounded-full text-2xl p-2">Register</li>
          </Link>
          <Link href="/users/login">
            <li className="hover:font-bold hover:bg-green-500 hover:rounded-full text-2xl p-2">Login</li>
          </Link>

        </ul>
        {/* <Image src={hamburger} alt="" className="w-10 h-10 rounded-full md:hidden cur"></Image> */}
      </div>
    </nav>
  )
};
