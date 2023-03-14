import React from 'react'
import { Header, KeyValueDisplay, Dropdown, SectionTitleDisplay, TextBox, CustomButton } from '@/components'
import screenText from 'screenText'
import optionsIcon from '@/assets/options.png'
import settingsIcon from '@/assets/settings.png'
import Image from 'next/image'

export default function PatientDetails () {
  const onChangeMobileNumber = (event) => {
    console.log(event.target.value)
  }
  const onChangeEmail = (event) => {
    console.log(event.target.value)
  }
  return (
    <>
      <div>
        <Header text={screenText.patientScreen.header} />
        <div className="px-3">
          <div className="text-2xl flex flex-row justify-between">
            <div className="pt-4 pb-2 flex flex-row">
              <div className="pr-1">ABHA Details</div>
              <Image src={optionsIcon} alt="options-icon" className="px-2 w-10 h-6"></Image>
            </div>
            <div className="pt-5 pb-2">
              <Image src={settingsIcon} alt="settings-icon"></Image>
            </div>
          </div>
          <div className="mb-1">
            <KeyValueDisplay keyText={screenText.patientScreen.textFields[0]} valueText="12-3456-7890-1234" />
          </div>
          <div className="mb-1">
            <KeyValueDisplay keyText={screenText.patientScreen.textFields[1]} valueText="health_id.ayush@sbx" />
          </div>
          <div className="mb-1">
            <Dropdown headerComponent={({ toggleDropdown }) => {
              return (
                <KeyValueDisplay
                  keyText={screenText.patientScreen.textFields[2]}
                  valueText="+919876554321"
                  onEditClick={toggleDropdown}
                />
              )
            }} className="">
              <div className="flex bg-textBox p-6">
                <TextBox label="First Name" onChange={onChangeMobileNumber} className="bg-white" />
                <CustomButton className="bg-submit ml-12">
                  Submit
                </CustomButton>
              </div>
            </Dropdown>
          </div>
          <div className="mb-1">
            <Dropdown headerComponent={({ toggleDropdown }) => {
              return (
                <KeyValueDisplay
                  keyText={screenText.patientScreen.textFields[3]}
                  valueText="email@domain.com"
                  onEditClick={toggleDropdown}
                />
              )
            }} className="">
              <div className="flex bg-textBox p-6">
                <TextBox label="First Name" onChange={onChangeEmail} className="bg-white" />
                <CustomButton className="bg-submit ml-12">
                  Submit
                </CustomButton>
              </div>
            </Dropdown>
          </div>
          <div className="my-4">
            <Dropdown headerComponent={({ toggleDropdown, isOpen }) => {
              return (
                <SectionTitleDisplay
                  text={screenText.patientScreen.dropdown[0].title}
                  onExpandClick={toggleDropdown}
                  expanded={isOpen}
                />
              )
            }} className="">
              <KeyValueDisplay keyText={screenText.patientScreen.dropdown[0].fields[0]} valueText="First M Last" />
              <KeyValueDisplay keyText={screenText.patientScreen.dropdown[0].fields[1]} valueText="Gender" />
              <KeyValueDisplay keyText={screenText.patientScreen.dropdown[0].fields[2]} valueText=" dd/mm/yyyy" />
            </Dropdown>

            <Dropdown headerComponent={({ toggleDropdown, isOpen }) => (
              <SectionTitleDisplay
                text={screenText.patientScreen.dropdown[1].title}
                onExpandClick={toggleDropdown}
                expanded={isOpen}
              />
            )} className="px-0">
              <KeyValueDisplay keyText={screenText.patientScreen.dropdown[1].fields[0]} valueText="Street details" />
              <KeyValueDisplay keyText={screenText.patientScreen.dropdown[1].fields[1]} valueText="Town, District, City" />
              <KeyValueDisplay keyText={screenText.patientScreen.dropdown[1].fields[2]} valueText="XXXXXX" />
            </Dropdown>
          </div>
        </div>
      </div>
    </>
  )
}
