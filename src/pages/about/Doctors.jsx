import "../../app/globals.css"
import Footer from '@/components/Footer.jsx'
import Navbar from '@/components/Navbar.jsx'
import DoctorsHeader from '@/components/DoctorsHeader'
import DoctorsInfo from '@/components/DoctorsInfo'

export default function Doctors() {
  return (
    <>
      <div className='absolute'>
          <Navbar />
          <DoctorsHeader />
          <DoctorsInfo />
          <Footer />
      </div>
    </>
  )

};