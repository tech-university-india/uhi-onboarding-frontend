import Image from 'next/image'
import React from 'react'

export default function Info (props) {
  return (
    <div className="container mx-auto py-5 justify-between flex flex-col">
      <div className="flex flex-col items-center justify-center">
        <p className="text-xl">{props.info}</p>
      </div>
      <div className="flex flex-col items-center justify-center">
        <Image src={props.imagePath} alt="" width={100} height={100} className="h-1/4 w-1/4"></Image>
      </div>
    </div>
  )
}
