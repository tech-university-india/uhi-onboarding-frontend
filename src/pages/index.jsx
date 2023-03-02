import CustomButton from '@/components/CustomButton'
import React from 'react'

// const inter = Inter({ subsets: ['latin'] })

export default function Home () {
  return (
    <>
      <h1 className="m-10 flex gap-5" ><CustomButton>HELLO</CustomButton>
        <CustomButton isSelected ={ true}>Deactivated</CustomButton>
      </h1>
    </>
  )
};
