import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import Footer from '@/components/Footer.jsx'
import Navbar from '@/components/Navbar.jsx'
import Header from '@/components/header.jsx'
import Info from '@/components/Info'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <div className='absolute'>
          <Navbar />
          <Header />
          <Info />
          <Footer />
      </div>
    </>
  )

};