import Image from 'next/image'
import infoDiagram from '@/assets/citizens_doctors_info_diagram.png'

export default function CitizensInfo() {
    return (
        <div className='container mx-auto py-5 justify-between flex flex-col'>
            <div className='flex flex-col items-center justify-center'>
                <p className='text-xl'>Citizens would be able to create an ABHA number using our interface that would act as the starting point in
                    their journey with ABDM. ABHA allows a person to link all their digital health records and share these records
                    seamlessly with hospitals and doctors during a consultation. The ABHA number allows individuals to use any
                    public or private health locker application for downloading their personal health records for easier viewing and personal assessment. Through our application integrated with ABDM, citizens will be able to digitally access healthcare services like booking and availing appointments, searching for nearest hospitals and more.</p>
            </div>
            <div className='flex flex-col items-center justify-center'>
                <Image src={infoDiagram} alt='' className='h-1/4 w-1/4'></Image>
            </div>
        </div>
    )
}