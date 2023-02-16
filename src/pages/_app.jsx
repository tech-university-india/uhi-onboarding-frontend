import Footer from '@/components/Footer'
import NavBar from '@/components/Navbar'
import '../app/globals.css'

import React from 'react'

export default function MyApp ({ Component, pageProps }) {
  return <>
    <div className="flex flex-col min-h-screen justify-between">
      <NavBar />
      <div className="w-[100%] grow">
        <Component {...pageProps} />
      </div>
      <Footer />
    </div>
  </>
}
