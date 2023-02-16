import React from 'react'

import Header from '@/components/Header'
import Info from '@/components/Info'
import screenText from 'screenText'
import DoctorImage from '../../../assets/citizens_doctors_info_diagram.png'

export default function Doctors () {
  return (
    <>
      <div>
        <Header header={screenText.about.doctors.header} />
        <Info info={screenText.about.doctors.info} imagePath={DoctorImage} />
      </div>
    </>
  )
};
