import React from 'react'
import { Header, KeyValueDisplay, Dropdown, SectionTitleDisplay, TextBox, CustomButton, OTPInput } from '@/components'
import screenText from 'screenText'
import optionsIcon from '@/assets/options.png'
import settingsIcon from '@/assets/settings.png'
import Image from 'next/image'

export default function PatientDetails () {
  const [editMobileNumber, setEditMobileNumber] = React.useState(false)
  const [showUpdateMethods, setShowUpdateMethods] = React.useState(false)
  const [updateMethodPlaceholder, setUpdateMethodPlaceholder] = React.useState('')
  const [showSelectUpdateMethod, setShowSelectUpdateMethod] = React.useState(false)
  const [mobileNumber, setMobileNumber] = React.useState('')
  const onChangeMobileNumber = (event) => {
    setMobileNumber(event.target.value)
  }
  const onChangeEmail = (event) => {
    console.log(event.target.value)
  }
  const onSubmitMobileNumber = () => {
    setEditMobileNumber(true)
  }
  const onSubmitOTP = () => {
    setEditMobileNumber(false)
    setShowUpdateMethods(true)
  }
  const onSubmitUpdateMethods = (placeholderText) => {
    setShowUpdateMethods(false)
    setUpdateMethodPlaceholder(placeholderText)
    setShowSelectUpdateMethod(true)
  }
  const onChangeUpdateMethod = (event) => {
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
            }} className="mb-0">
              <div className="flex flex-col bg-textBox p-6">
                <div className="flex">
                  {!editMobileNumber && !showUpdateMethods && !showSelectUpdateMethod && <TextBox onChange={onChangeMobileNumber} placeholder="Enter new number" type="number" noBg />}
                  {(editMobileNumber || showUpdateMethods || showSelectUpdateMethod) && <TextBox onChange={onChangeMobileNumber} placeholder={mobileNumber} type="number" disabled />}
                  {!editMobileNumber && !showUpdateMethods && !showSelectUpdateMethod && <CustomButton className="bg-submit ml-10" onClick={onSubmitMobileNumber}>
                  Submit
                  </CustomButton>}
                </div>
                <div>
                  {editMobileNumber && <div className="flex mt-4">
                    <OTPInput className="h-10 w-6" />
                    <CustomButton className="bg-submit ml-6" onClick={onSubmitOTP}>
                      Submit
                    </CustomButton>
                  </div>}
                  {showUpdateMethods && <div className="flex mt-4">
                    <div className="pt-2">Update via</div>
                    <CustomButton className="bg-options text-black ml-3 h-10 w-15 px-1 py-1" onClick={() => onSubmitUpdateMethods('Aadhaar')}>
                      Aadhaar
                    </CustomButton>
                    <CustomButton className="bg-options text-black ml-3 h-10 w-15 px-1 py-1" onClick={() => onSubmitUpdateMethods('Mobile')}>
                      Mobile
                    </CustomButton>
                    <CustomButton className="bg-options text-black ml-3 h-10 w-15 px-1 py-1" onClick={() => onSubmitUpdateMethods('Password')}>
                      Password
                    </CustomButton>
                  </div>}
                  {showSelectUpdateMethod && <div className="flex mt-4">
                    <TextBox onChange={onChangeUpdateMethod} className="bg-white" placeholder={updateMethodPlaceholder} noBg
                      type={updateMethodPlaceholder === 'Password' ? 'password' : 'number'}
                    />
                    <CustomButton className="bg-submit ml-12">
                      Submit
                    </CustomButton>
                  </div>}
                </div>
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
                <TextBox label="First Name" onChange={onChangeEmail} placeholder="Enter new email" noBg />
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
