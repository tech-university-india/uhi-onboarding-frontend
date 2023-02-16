import React from 'react'

import Info from '@/components/Info'
import screenText from 'screenText'
import UHIImage from '@/assets/uhi_diagram.png'

// const inter = Inter({ subsets: ['latin'] })

export default function Home () {
  return (
    <>
      <div>
        <Info info= {screenText.about.general.info} imagePath={UHIImage} />
      </div>
    </>
  )
};
