import Image from 'next/image'
import qr from '../assets/QR_code_for_mobile_English_Wikipedia.svg.webp'
export default function Navbar() {
    return (

        <footer className="w-full bg-uhigreen fixed bottom-0">
            <div className="container mx-auto grid grid-cols-1 gap-1 px-6 py-8  md:grid-cols-4 md:gap-5">
                <div>
                    <h2 className="mb-6 text-xl font-myText">Our Partners</h2>
                    <ul className="text-m hidden md:block">
                        <li className="mb-4">
                            <a className=" hover:underline">BAHMNI</a>
                        </li>

                    </ul>
                </div>
                <div>
                    <h2 className="mb-6 text-xl font-myText">Important Links</h2>
                    <ul className="text-m hidden md:block">
                        <li className="mb-4">
                            <a className=" hover:underline">Health Facility Registery</a>
                        </li>

                        <li className="mb-4">
                            <a className=" hover:underline">Health Professionals Registery</a>
                        </li>
                    </ul>
                </div>

                <div>
                    <h2 className="mb-6 text-xl font-myText">Policies</h2>
                    <ul className="text-m hidden md:block">
                        <li className="mb-4">
                            <a className=" hover:underline">Data Privacyy</a>

                        </li>
                        <li className='mb-4'>
                            <a className=" hover:underline">Policy Terms and Conditions</a>
                        </li>
                    </ul>
                </div>

                <div>
                    <h2 className="mb-6 text-xl font-myText">Patient Locker</h2>
                    <ul className="textß-m hidden md:block">
                        <li className="mb-4">
                            <a className=" hover:underline">
                                <Image src={qr} alt='' className='h-12 w-12'></Image>
                            </a>
                        </li>

                    </ul>
                </div>

            </div>

        </footer>
    )
};