import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
return   <main>
    <h1 className='text-3xl font-bold' >Hello World</h1>
  </main>

};