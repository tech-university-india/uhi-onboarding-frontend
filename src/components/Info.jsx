import Image from 'next/image'
import uhiDiagram from '@/assets/uhi_diagram.png'

export default function Info() {
    return (
        <div className='container mx-auto py-5 justify-between flex flex-col'>
            <div className='flex flex-col'>
                <h1 className='text-2xl'>Unified Health Interface</h1>
            </div>
            <div className='flex flex-col items-center justify-center'>
                <p className='text-xl'>UHI is envisioned as an open protocol for various digital health services. UHI Network will be an open network of End User Applications (EUAs) and participating Health Service Provider (HSP) applications. UHI will enable a wide variety of digital health services between patients and health service providers (HSPs) including appointment booking, teleconsultation, service discovery and others.</p>
            </div>
            <div className='flex flex-col items-center justify-center'>
                <Image src={uhiDiagram} alt='' className='h-1/4 w-1/4'></Image>
            </div>
        </div>
    )
}