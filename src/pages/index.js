import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Info from "@/components/Info";
import NavBar from "@/components/Navbar";

export default function Index() {return  <div className='absolute'>
<NavBar />
<Header header={screenText.about.general.header} />
<Info info= {screenText.about.general.info} imagePath={UHIImage} />
<Footer />
</div>}
