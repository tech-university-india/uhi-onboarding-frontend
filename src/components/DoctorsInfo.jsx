import Image from 'next/image'
import infoDiagram from '@/assets/citizens_doctors_info_diagram.png'

export default function DoctorsInfo() {
    return (
        <div className='container mx-auto py-5 justify-between flex flex-col'>
            <div className='flex flex-col items-center justify-center'>
                <p className='text-xl'>The ABDM has built verified registries for healthcare facilities and professionals who are given unique and trustable identity, which can facilitate ease of discovery and better access to care. Health professionals will have access to patient's longitudinal health history with their consent and can ensure follow-ups and plan treatment using telehealth solutions under the Unified Health Interface (UHI), ensuring quality and affordable health services. The building blocks of ABHA and the key registries - Health Professionals Registry (HPR), Health Facility Registry (HFR), and UHI, are built on a robust layer of Digital Public Goods like Aadhaar and UPI which introduces reliability and transparency to the system.</p>
            </div>
            <div className='flex flex-col items-center justify-center'>
                <Image src={infoDiagram} alt='' className='h-1/4 w-1/4'></Image>
            </div>
        </div>
    )
}