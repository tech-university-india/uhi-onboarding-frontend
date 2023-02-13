import { Inter } from '@next/font/google'
import Footer from '@/components/Footer.jsx'
import Navbar from '@/components/Navbar.jsx'
import Header from '@/components/header.jsx'
import Info from '@/components/Info'
import screenText from 'screenText'
import UHIImage from '@/assets/uhi_diagram.png'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <div className='absolute'>
          <Navbar />
          <Header header={screenText.about.general.header} />
          <Info info= {screenText.about.general.info} imagePath={UHIImage} />
          <Footer />
      </div>
    </>
  )

};