import "../../app/globals.css";
import Footer from '@/components/Footer.jsx'
import Navbar from '@/components/Navbar.jsx'
import Header from "@/components/Header";
import Info from "@/components/Info";
import screenText from "screenText";
import DoctorImage from '@/assets/citizens_doctors_info_diagram.png'

export default function Doctors() {
  return (
    <>
      <div className='absolute'>
          <Navbar />
          <Header header={screenText.about.doctors.header} />
          <Info info={screenText.about.doctors.info} imagePath={DoctorImage} />
          <Footer />
      </div>
    </>
  )

};