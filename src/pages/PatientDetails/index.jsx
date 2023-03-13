import React from 'react'
import { Header } from '@/components'
import screenText from 'screenText'
import optionsIcon from '@/assets/options.png'
import settingsIcon from '@/assets/settings.png'
import Image from 'next/image'

export default function PatientDetails () {
  return (
    <>
      <div>
        <Header text={screenText.patientScreen.header} />
        <div className="text-2xl flex flex-row justify-between">
          <div className="pt-4 pb-2 px-3 flex flex-row">
            <div className="pr-1">ABHA Details</div>
            <Image src={optionsIcon} alt="options-icon" className="px-2 w-10 h-6"></Image>
          </div>
          <div className="pt-5 pb-2 px-3">
            <Image src={settingsIcon} alt="settings-icon"></Image>
          </div>
        </div>
      </div>
    </>
  )
}
