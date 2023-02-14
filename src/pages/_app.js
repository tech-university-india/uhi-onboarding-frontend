import Footer from "@/components/Footer";
import NavBar from "@/components/Navbar";
import "../app/globals.css";
export default function MyApp({ Component, pageProps }) {
  return <> <NavBar /><Component {...pageProps} /><Footer></Footer></>;
}