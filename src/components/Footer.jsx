import Image from 'next/image';
import qr from '../assets/QR_code_for_mobile_English_Wikipedia.svg.webp';
export default function Footer() {
  return (
    <footer className="w-full bg-uhigreen fixed bottom-0">
      <div className="container mx-auto grid-cols-1 pt-6 pb-2  md:grid-cols-3 md:gap-5 flex justify-between">
        <div>
          <h2 className="font-bold text-2xl font-sans mb-2.5">Important Links</h2>
          <ul className="text-m hidden md:block">
            <li className="mb-4">
              <a className="text-black text-lg font-sans">Health Facility Registery</a>
            </li>

            <li className="mb-4">
              <a className="text-black text-lg font-sans">Health Professionals Registery</a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="font-bold text-2xl font-sans mb-2.5">Policies</h2>
          <ul className="text-m hidden md:block">
            <li className="mb-4">
              <a className="text-black text-lg font-sans">Data Privacy</a>

            </li>
            <li className='mb-4'>
              <a className="text-black text-lg font-sans">Policy Terms and Conditions</a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="font-bold text-2xl font-sans mb-2.5 ">Patient Locker</h2>
          <ul className="textß-m hidden md:block">
            <li className="mb-4 ">
              <a className="hover:underline ">
                <Image src={qr} alt='' className='h-12 w-12 ml-12'></Image>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
};