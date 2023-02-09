import Footer from "@/components/Footer";
import NavigationBar from "@/components/NavigationBar";
import "../app/globals.css";
export default function MyApp({ Component, pageProps }) {
  return <> <NavigationBar /><Component {...pageProps} /><Footer></Footer></>;
}