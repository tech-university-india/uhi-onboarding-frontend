import CustomButton from '@/components/CustomButton'
import React from 'react'
import { ButtonColors } from '@/common/constants'

export default function Home () {
  return (
    <div className="flex w-screen h-screen gap-6 justify-center items-center" >
      <CustomButton color={ButtonColors.red} isSelected={true}>Hello</CustomButton>
      <CustomButton color={ButtonColors.green}>Hello</CustomButton>
      <CustomButton color={ButtonColors.purple}>Hello</CustomButton>
      <CustomButton color={ButtonColors.brown} isSelected={true} >Hello</CustomButton>
      <CustomButton color={ButtonColors.orange}>Hello</CustomButton>

    </div>
  )
}
