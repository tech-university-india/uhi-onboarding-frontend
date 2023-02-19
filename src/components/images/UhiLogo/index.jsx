import React from 'react'

import Logo from '../../../assets/uhi-logo.png'
import Image from 'next/image'
function UhiLogo ({ height = 'h-96' }) {
  return <Image src={Logo} alt="UHI Logo" className= {height} />
}
export default UhiLogo
