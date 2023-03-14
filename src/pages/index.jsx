import React from 'react'
import MyApp from './_app'
import PatientDetails from './PatientDetails'

export default function Home () {
  return (
    <>
      {/* <p className="th-h1">Hello World</p> */}
      <MyApp Component={PatientDetails} pageProps={{}} />
    </>
  )
}
