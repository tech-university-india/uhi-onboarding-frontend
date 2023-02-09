// import Footer from "@/components/Footer";
// import NavigationBar from "@/components/NavigationBar";

import React from 'react'
import '../app/globals.css'
export default function MyApp ({ Component, pageProps }) {
  return <>
    <Component {...pageProps} />
  </>
  { /* <NavigationBar /> */ }
  { /* <Footer></Footer></>; */ }
}
