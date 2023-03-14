import React from 'react'
import CustomButton from '../CustomButton'
import OTPInput from '../OTPInput'

const DeleteDeactivateDisplay = (props) => {
  const [changePasswordMethod, setChangePasswordMethod] = React.useState('')
  const [isOpen, setIsOpen] = React.useState(false)
  const [newPasswordCreate, setNewPasswordCreate] = React.useState(false)

  const changePasswordMethodToggle = () => setIsOpen(!isOpen)

  const addCredentialsToggle = () =>
    setNewPasswordCreate(!newPasswordCreate)

  const submitClickHandler = () => {
    addCredentialsToggle()
  }
  const methodClickHandler = (e) => {
    setChangePasswordMethod(e.target.innerText)
    changePasswordMethodToggle()
    addCredentialsToggle()
  }

  const clickHandlerForOuterButton = (e) => {
    if (!isOpen && !newPasswordCreate) {
      changePasswordMethodToggle()
    } else if (!isOpen && newPasswordCreate) {
      addCredentialsToggle()
    } else if (isOpen && !newPasswordCreate) {
      changePasswordMethodToggle()
    }
  }
  return (
    <div className="flex-col mt-12 flex items-center mr-2 ml-2">
      {props.title === 'Change Password' && (
        <>
          <CustomButton
            className={
              'bg-options font-light rounded-md text-left w-full drop-shadow-xl'
            }
            onClick={clickHandlerForOuterButton}
          >
            {props.title}
          </CustomButton>
          {isOpen && (
            <div className="flex gap-x-4 justify-center bg-textBox w-full px-2 py-2">
              <p className="mt-4 text-sm py-2">Update via</p>
              <CustomButton
                className="bg-options mt-4 font-light rounded-none px-3 py-1"
                onClick={methodClickHandler}
              >
                Aadhar
              </CustomButton>
              <CustomButton
                className="bg-options mt-4 font-light rounded-none px-3 py-1"
                onClick={methodClickHandler}
              >
                Mobile
              </CustomButton>
              <CustomButton

                className="bg-options mt-4 font-light rounded-none px-3 py-1"
                onClick={methodClickHandler}
              >
                Password
              </CustomButton>
            </div>
          )}
          {newPasswordCreate && (
            <div className="bg-textBox flex flex-col items-center w-full py-4">
              {changePasswordMethod === 'Password' && (
                <input
                  data-testid="oldPassword"
                  type="password"
                  placeholder="Old Password"
                  className="h-8 text-red rounded-md shadow-xl px-4 py-8 text-lg mb-2 w-5/6"
                />
              )}

              <input
                type="password"
                placeholder="New Password"
                className="h-8 text-red rounded-md shadow-xl px-4 py-8 text-lg mb-2 w-5/6"
              />
              {changePasswordMethod !== 'Password' && (
                <div className="flex bg-red gap-2 mt-4">
                  <OTPInput />

                  <CustomButton
                    className="bg-submit px-4 drop-shadow-xl rounded-sm font-light"
                    onClick={submitClickHandler}
                  >
                    Submit
                  </CustomButton>
                </div>
              )}
              {changePasswordMethod === 'Password' && (
                <CustomButton
                  className="bg-submit px-4 drop-shadow-xl rounded-sm font-light"
                  onClick={submitClickHandler}
                >
                  Submit
                </CustomButton>
              )}
            </div>
          )}
        </>
      )}
      {props.title === 'Deactivate Account' && (
        <>
          <CustomButton
            className={
              'bg-deactivate font-light rounded-md text-left w-full drop-shadow-xl'
            }
            onClick={clickHandlerForOuterButton}
          >
            {props.title}
          </CustomButton>
          {isOpen && (
            <div className="flex gap-x-4 justify-center bg-textBox w-full px-2 py-2">
              <p className="mt-4 text-sm py-2">Update via</p>
              <CustomButton
                className="bg-options mt-4 font-light rounded-none px-3 py-1"
                onClick={methodClickHandler}
              >
                Aadhar
              </CustomButton>
              <CustomButton
                className="bg-options mt-4 font-light rounded-none px-3 py-1"
                onClick={methodClickHandler}
              >
                Mobile
              </CustomButton>
              <CustomButton
                className="bg-options mt-4 font-light rounded-none px-3 py-1"
                onClick={methodClickHandler}
              >
                Password
              </CustomButton>
            </div>
          )}
          {newPasswordCreate && (
            <div className="bg-textBox flex flex-col items-center w-full py-4">
              {changePasswordMethod !== 'Password' && (
                <div className="flex bg-red gap-2 mt-4">
                  <OTPInput />

                  <CustomButton
                    className="bg-submit px-4 drop-shadow-xl rounded-sm font-light"
                    onClick={submitClickHandler}
                  >
                    Submit
                  </CustomButton>
                </div>
              )}
              {changePasswordMethod === 'Password' && (
                <>
                  <input
                    type="password"
                    placeholder="Password"
                    className="h-8 text-red rounded-md shadow-xl px-4 py-8 text-lg mb-2 w-5/6"
                  />
                  <CustomButton
                    className="bg-submit px-4 drop-shadow-xl rounded-sm font-light"
                    onClick={submitClickHandler}
                  >
                    Submit
                  </CustomButton>
                </>
              )}
            </div>
          )}
        </>
      )}
      {props.title === 'Delete Account' && (
        <>
          <CustomButton
            className={
              'bg-delete font-light rounded-md text-left w-full drop-shadow-xl'
            }
            onClick={clickHandlerForOuterButton}
          >
            {props.title}
          </CustomButton>
          {isOpen && (
            <div className="flex gap-x-4 justify-center bg-textBox w-full px-2 py-2">
              <p className="mt-4 text-sm py-2">Update via</p>
              <CustomButton
                className="bg-options mt-4 font-light rounded-none px-3 py-1"
                onClick={methodClickHandler}
              >
                Aadhar
              </CustomButton>
              <CustomButton
                className="bg-options mt-4 font-light rounded-none px-3 py-1"
                onClick={methodClickHandler}
              >
                Mobile
              </CustomButton>
              <CustomButton
                className="bg-options mt-4 font-light rounded-none px-3 py-1"
                onClick={methodClickHandler}
              >
                Password
              </CustomButton>
            </div>
          )}
          {newPasswordCreate && (
            <div className="bg-textBox flex flex-col items-center w-full py-4">
              {changePasswordMethod !== 'Password' && (
                <div className="flex bg-red gap-2 mt-4">
                  <OTPInput />

                  <CustomButton
                    className="bg-submit px-4 drop-shadow-xl rounded-sm font-light"
                    onClick={submitClickHandler}
                  >
                    Submit
                  </CustomButton>
                </div>
              )}
              {changePasswordMethod === 'Password' && (
                <>
                  <input
                    type="password"
                    placeholder="Password"
                    className="h-8 text-red rounded-md shadow-xl px-4 py-8 text-lg mb-2 w-5/6"
                  />
                  <CustomButton
                    className="bg-submit px-4 drop-shadow-xl rounded-sm font-light"
                    onClick={submitClickHandler}
                  >
                    Submit
                  </CustomButton>
                </>
              )}
            </div>
          )}
        </>
      )}
    </div>
  )
}

export default DeleteDeactivateDisplay
