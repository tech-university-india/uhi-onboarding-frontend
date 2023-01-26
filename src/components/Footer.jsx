
import Image from 'next/image'
import qr from '../assets/QR_code_for_mobile_English_Wikipedia.svg.webp'
export default function Navbar() {
    return (

        <footer class="w-full bg-myGreen fixed bottom-0">
            <div class="container mx-auto grid grid-cols-1 gap-1 px-6 py-8  md:grid-cols-4 md:gap-5">
                <div>
                    <h2 class="mb-6 text-xl font-myText">Our Partners</h2>
                    <ul class="text-m hidden md:block">
                        <li class="mb-4">
                            <a class=" hover:underline">BAHMNI</a>
                        </li>

                    </ul>
                </div>
                <div>
                    <h2 class="mb-6 text-xl font-myText">Important Links</h2>
                    <ul class="text-m hidden md:block">
                        <li class="mb-4">
                            <a class=" hover:underline">Health Facility Registery</a>
                        </li>

                        <li class="mb-4">
                            <a class=" hover:underline">Health Professionals Registery</a>
                        </li>
                    </ul>
                </div>

                <div>
                    <h2 class="mb-6 text-xl font-myText">Policies</h2>
                    <ul class="text-m hidden md:block">
                        <li class="mb-4">
                            <a class=" hover:underline">Data Privacyy</a>
                        
                        </li>
                        <li class='mb-4'>
                        <a class=" hover:underline">Policy Terms and Conditions</a>
                        </li>
                    </ul>
                </div>

                <div>
                    <h2 class="mb-6 text-xl font-myText">Patient Locker</h2>
                    <ul class="textß-m hidden md:block">
                        <li class="mb-4">
                            <a class=" hover:underline">
                                <Image src={qr} alt='' class='h-12 w-12'></Image>
                            </a>
                        </li>

                    </ul>
                </div>

                


            </div>

        </footer>



    )
};



<nav class="w-full h-36 bg-myGreen fixed bottom-0">
    <div class='container mx-auto py-5 flex flex-col justify-center items-center gap-2 font-myText md:flex md:flex-row md:gap-40' >
        <div class='relative w-40'>
            <p>Our Partners</p>
            <ol class='list-disc hidden md:block md:absolute md:left-2'>
                <li>BAHMNI</li>

            </ol>

        </div>
        <div class='relative w-40'>
            <p>Important Links</p>
            <ol class='list-disc hidden md:block md:absolute md:left-2'>
                <li>Health Facility Registery</li>
                <li>Health Professionals Registery</li>
            </ol>

        </div>
        <div class='relative w-40'>
            <p>Policies</p>
            <ol class='list-disc hidden md:block md:absolute md:left-2'>
                <li>Data Privacy </li>
                <li>Policy Terms and Conditions</li>
            </ol>

        </div>
        <div class='relative w-40'>
            <p>Patient Locker</p>
            <ol class='list-disc hidden md:block md:absolute md:left-2'>
                <li>BAHMNI</li>
            </ol>
        </div>


    </div>

</nav>