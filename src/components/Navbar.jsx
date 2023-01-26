import logo from '../assets/ABDM_English_Logo_with_tagline_aea4f8d600.png';
import hamburger from '../assets/Hamburger_icon.svg.png'
import Image from 'next/image'

export default function Navbar() {
    return (
        <nav class="w-full bg-myGreen fixed top-0">
            <div class='container mx-auto py-5 flex justify-between items-center'>
                <div>
                    <Image src={logo} alt='' class='w-14 h-14 rounded-full'></Image>
                </div>

                <ul class="hidden md:flex space-x-10 text-xl  font-myText">
                    <li class='hover:font-extrabold hover:underline'>Home</li>
                    <li class='hover:font-extrabold hover:underline'>Documentation</li>
                    <li class='hover:font-extrabold hover:underline'>FAQ'S</li>
                    <li class='hover:font-extrabold hover:underline'>Contact Us</li>
                    <li class='hover:font-extrabold hover:underline'>Login</li>
                </ul>
                {/* Hamburger */}
                <Image src={hamburger} alt='' class='w-10 h-10 rounded-full md:hidden cur'></Image>




            </div>

        </nav>
    )
};