import "../../app/globals.css";
import Footer from '@/components/Footer.jsx'
import Navbar from '@/components/Navbar.jsx'
import CitizensHeader from '@/components/CitizensHeader'
import CitizensInfo from '@/components/CitizensInfo'

export default function Citizens() {
  return (
    <>
      <div className='absolute'>
          <Navbar />
          <CitizensHeader />
          <CitizensInfo />
          <Footer />
      </div>
    </>
  )

};