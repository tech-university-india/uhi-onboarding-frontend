import Image from 'next/image';
import qr from '../Assets/qrcode.png'
// function Footer(){
//     return <footer class="text-center bg-uhigreen text-black bottom-0 fixed w-full  flex justify-evenly">
//     <div class="container pt-6">

//       <div class="grid lg:grid-cols-4 md:grid-cols-2 ">
//         <div class="mb-6">
//           <h5 class="font-bold text-2xl font-sans mb-2.5 ">Our Partners</h5>

//           <ul class="list-none mb-0">
//             <li>
//               <a href="#!" class="text-black text-lg font-sans">BAHMNI</a>
//             </li>
//             <li>
//               <a href="#!" class="text-black text-lg font-sans">Thoughtworks</a>
//             </li>
//           </ul>
//         </div>

//         <div class="mb-6">
//           <h5 class="font-bold text-2xl font-sans mb-2.5 ">Important Links</h5>
//           <ul class="list-none mb-0">
//             <li class>
//               <a href="#!" class="text-black text-lg font-sans">Health Facility Registry</a>
//             </li>
//             <li>
//               <a href="#!" class="text-black text-lg font-sans">Health Professionals Registry</a>
//             </li>
//           </ul>
//         </div>

//         <div class="mb-6">
//           <h5 class="font-bold text-2xl font-sans mb-2.5 ">Policies</h5>

//           <ul class="list-none mb-0">
//             <li>
//               <a href="#!" class="text-black text-lg font-sans">Data Privacy Policy</a>
//             </li>
//             <li>
//               <a href="#!" class="text-black text-lg font-sans">Terms and Conditions</a>
//             </li>
//           </ul>
//         </div>

//         <div class="mb-6">
//           <h5 class="font-bold font-sans text-2xl mb-2.5">Patient Locker</h5>

//           <ul class="list-none mb-0">
//             <li>
//               {/* <a href="#!" class="text-black text-lg">Link 1</a> */}
//               <Image src={logo} alt="ABDM QR" class='w-16 mx-auto items-center'/>
//             </li>

//           </ul>
//         </div>
//       </div>
//     </div>
//   </footer>
// }
// export default Footer;

export default function Navbar() {
  return (
    <footer class="w-full bg-uhigreen fixed bottom-0">
      <div class="container mx-auto grid-cols-1 pt-6 pb-2  md:grid-cols-3 md:gap-5 flex justify-between">

        <div>
          <h2 class="font-bold text-2xl font-sans mb-2.5">Important Links</h2>
          <ul class="text-m hidden md:block">
            <li class="mb-4">
              <a class="text-black text-lg font-sans">Health Facility Registery</a>
            </li>

            <li class="mb-4">
              <a class="text-black text-lg font-sans">Health Professionals Registery</a>
            </li>
          </ul>
        </div>

        <div>
          <h2 class="font-bold text-2xl font-sans mb-2.5">Policies</h2>
          <ul class="text-m hidden md:block">
            <li class="mb-4">
              <a class="text-black text-lg font-sans">Data Privacy</a>

            </li>
            <li class='mb-4'>
              <a class="text-black text-lg font-sans">Policy Terms and Conditions</a>
            </li>
          </ul>
        </div>

        <div>
          <h2 class="font-bold text-2xl font-sans mb-2.5 ">Patient Locker</h2>
          <ul class="textß-m hidden md:block">
            <li class="mb-4 ">
              <a class="hover:underline ">
                <Image src={qr} alt='' class='h-12 w-12 ml-12'></Image>
              </a>
            </li>
          </ul>
        </div>
      </div>

    </footer>



  )
};
