import "../../app/globals.css";
import Footer from '@/components/Footer.jsx'
import Header from "@/components/Header";
import Info from "@/components/Info";
import screenText from "screenText";
import CitizenImage from '@/assets/citizens_doctors_info_diagram.png'

export default function Citizens() {
  return (
    <>
      <div>
          <Header header={screenText.about.citizens.header} />
          <Info info={screenText.about.citizens.info} imagePath={CitizenImage} />
          <Footer />
      </div>
    </>
  )

};