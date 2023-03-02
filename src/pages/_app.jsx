import './globals.css'

import React from 'react'

export default function MyApp ({ Component, pageProps }) {
  return (
    <>
      <div className="w-[100%] grow">
        <Component {...pageProps} />
      </div>
    </>
  )
}
