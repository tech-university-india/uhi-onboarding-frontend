
/* eslint-disable jsx-a11y/anchor-is-valid */
import "../app/globals.css";
import logo from '../assets/ABDM_English_Logo_with_tagline_aea4f8d600.png';
import hamburger from '../assets/Hamburger_icon.svg.png'
import Image from 'next/image'

export default function NavigationBar() {
    return (
        <nav className="w-full bg-uhigreen fixed top-0 mb-2">
            <div className='container mx-auto py-1 flex font-sans justify-between items-center'>
                <div className=''>
                    <Image src={logo} alt='' className='h-24 w-24 rounded-full ml-0'></Image>
                </div>
                <ul className="hidden md:flex space-x-10 text-xl  font-myText">
                    <li className='hover:font-bold hover:bg-green-500 hover:rounded-full text-2xl p-2'>Home</li>
                    <li className='hover:font-bold hover:bg-green-500 hover:rounded-full text-2xl p-2'>Documentation</li>
                    <li className='hover:font-bold hover:bg-green-500 hover:rounded-full text-2xl p-2'>FAQs</li>
                    <li className='hover:font-bold hover:bg-green-500 hover:rounded-full text-2xl p-2'>Contact Us</li>
                    <li className='hover:font-bold hover:bg-green-500 hover:rounded-full text-2xl p-2'>Login</li>
                </ul>
                <Image src={hamburger} alt='' className='w-10 h-10 rounded-full md:hidden cur'></Image>
            </div>
        </nav>
    )
};