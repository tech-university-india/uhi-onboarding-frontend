import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Navbar />
      <Footer />
    </>
  )

};