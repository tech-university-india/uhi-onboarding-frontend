import React from 'react'

import Logo from '../../../assets/uhi-logo.png'
import Image from 'next/image'
function UhiLogo () {
  return <Image src={Logo} alt="UHI Logo" className="h-96" />
}
export default UhiLogo
