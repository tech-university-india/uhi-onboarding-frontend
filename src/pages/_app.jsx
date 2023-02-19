import Footer from '@/components/Footer'
import NavBar from '@/components/Navbar'
import './globals.css'

import React from 'react'
import Head from '@/components/Head'
import Snackbar from '@/components/Snackbar'

export default function MyApp ({ Component, pageProps }) {
  return (
    <>
      <Head />
      <div className="flex flex-col min-h-screen justify-between">
        <NavBar />
        {/* <div className="w-[100%] h-[100%] flex flex-col grow"> */}
        <Snackbar>
          <div className="flex-grow min-h-[100%] w-[100%] flex flex-col">
            <Component {...pageProps} />
          </div>
        </Snackbar>
        {/* </div> */}
        <Footer />
      </div>
    </>
  )
}
