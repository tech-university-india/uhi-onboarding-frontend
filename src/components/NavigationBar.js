
/* eslint-disable jsx-a11y/anchor-is-valid */
import "../app/globals.css";
// function NavigationBar() {
//     return (<nav class="flex sticky top-0 z-30 px-4 py-3 border-b md:shadow-lg items-center relative bg-uhigreen font-sans">
//     <div class="text-lg md:py-0 py-4 text-5xl">
//         Unified Health Interface
//     </div>
//     <ul class="md:px-2 ml-auto md:flex md:space-x-2 absolute md:relative top-full left-0 right-1">
//         <li>
//             <a href="#" class="flex md:inline-flex p-4 items-center hover:bg-green-500 hover:rounded-full text-3xl">
//                 <span>Home</span>
//             </a>
//         </li>
//         <li>
//             <a href="#" class="flex md:inline-flex p-4 items-center hover:bg-green-500 hover:rounded-full text-3xl">
//                 Documentation
//             </a>
//         </li>
//         <li>
//             <a href="#" class="flex md:inline-flex p-4 items-center hover:bg-green-500 hover:rounded-full text-3xl">
//                 <span>FAQ's</span>

//             </a>
//         </li>
//         <li>
//             <a href="#" class="flex md:inline-flex p-4 items-center hover:bg-green-500 hover:rounded-full text-3xl">
//                 <span>Contact Us</span>
//             </a>
//         </li>
//     </ul>
//     <div class="ml-auto md:hidden text-gray-500 cursor-pointer">
//         <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/></svg>
//     </div>
// </nav>)
// }
// export default NavigationBar;

import logo from '../assets/ABDM_English_Logo_with_tagline_aea4f8d600.png';
import hamburger from '../assets/Hamburger_icon.svg.png'
import Image from 'next/image'

export default function NavigationBar() {
    return (
        <nav class="w-full bg-uhigreen fixed top-0 mb-2">
            <div class='container mx-auto py-1 flex font-sans justify-between items-center'>
                <div class=''>
                    <Image src={logo} alt='' class='h-24 w-24 rounded-full ml-0'></Image>
                </div>

                <ul class="hidden md:flex space-x-10 text-xl  font-myText">
                    <li class='hover:font-bold hover:bg-green-500 hover:rounded-full text-2xl p-2'>Home</li>
                    <li class='hover:font-bold hover:bg-green-500 hover:rounded-full text-2xl p-2'>Documentation</li>
                    <li class='hover:font-bold hover:bg-green-500 hover:rounded-full text-2xl p-2'>FAQs</li>
                    <li class='hover:font-bold hover:bg-green-500 hover:rounded-full text-2xl p-2'>Contact Us</li>
                    <li class='hover:font-bold hover:bg-green-500 hover:rounded-full text-2xl p-2'>Login</li>
                </ul>
                {/* Hamburger */}
                <Image src={hamburger} alt='' class='w-10 h-10 rounded-full md:hidden cur'></Image>
            </div>

        </nav>
    )
};