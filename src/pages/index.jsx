import Header from '@/components/Header'
import KeyValueDisplay from '@/components/KeyValueDisplay'
import React from 'react'

// const inter = Inter({ subsets: ['latin'] })

export default function Home () {
  return (
    <>
      <Header text={'Ayush'} />
      <div className="mt-3" />
      <KeyValueDisplay keyText={'Key'} valueText={'Value'} onEditClick={() => {}} />
    </>
  )
};
