import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import Navbar from '@/components/Navbar'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Navbar/>
    </>
  )
  //<main>
  //     <h1 className='text-3xl font-bold' >Hello World</h1>
  //   </main>

};