import React from 'react'
import Header from '@/components/Header'
import CustomButton from '@/components/CustomButton'

const DeactivatePage = () => {
  const [changePasswordMethod, setChangePasswordMethod] = React.useState('')
  const [isOpen, setIsOpen] = React.useState(false)
  const [newPasswordCreate, setNewPasswordCreate] = React.useState(false)

  const changePassworMethodToggle = () => setIsOpen(!isOpen)

  const newPasswordCreateToggle = () => setNewPasswordCreate(!newPasswordCreate)

  const submitClickHandler = () => {
    newPasswordCreateToggle()
  }

  const methodClickHandler = (e) => {
    setChangePasswordMethod(e.target.innerText)
    changePassworMethodToggle()
    newPasswordCreateToggle()
  }

  const clickHandlerForChangePassword = () => {
    if (!isOpen && !newPasswordCreate) {
      changePassworMethodToggle()
    } else if (!isOpen && newPasswordCreate) {
      newPasswordCreateToggle()
    } else if (isOpen && !newPasswordCreate) {
      changePassworMethodToggle()
    }
  }

  const clickEvent = (first, last) => {
    if (first.value.length) {
      document.getElementById(last).focus()
    }
  }

  return (
    <>
      <Header text="Ayush" />
      <div className="flex-col mt-12 flex items-center mr-2 ml-2">
        <CustomButton
          className={
            'bg-options font-light rounded-md text-left w-full drop-shadow-xl'
          }
          onClick={clickHandlerForChangePassword}
        >
          Change Password
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
                <input
                  type="text"
                  data-testid="first"
                  maxLength="1"
                  id="first"
                  onKeyUp={(e) => clickEvent(e.target, 'second')}
                  className="w-7 shadow-lg h-12 text-center rounded-md shadow-xl"
                  placeholder="-"
                />
                <input
                  type="text"
                  maxLength="1"
                  data-testid="second"
                  id="second"
                  onKeyUp={(e) => clickEvent(e.target, 'third')}
                  className="w-7 shadow-lg h-12 text-center rounded-md shadow-xl"
                  placeholder="-"
                />
                <input
                  type="text"
                  maxLength="1"
                  data-testid="third"
                  id="third"
                  onKeyUp={(e) => clickEvent(e.target, 'fourth')}
                  className="w-7 shadow-lg h-12 text-center rounded-md shadow-xl"
                  placeholder="-"
                />
                <input
                  type="text"
                  maxLength="1"
                  data-testid="fourth"
                  id="fourth"
                  onKeyUp={(e) => clickEvent(e.target, 'fifth')}
                  className="w-7 shadow-lg h-12 text-center rounded-md shadow-xl"
                  placeholder="-"
                />
                <input
                  type="text"
                  maxLength="1"
                  data-testid="fifth"
                  id="fifth"
                  onKeyUp={(e) => clickEvent(e.target, 'sixth')}
                  className="w-7 shadow-lg h-12 text-center rounded-md shadow-xl"
                  placeholder="-"
                />
                <input
                  type="text"
                  maxLength="1"
                  data-testid="sixth"
                  id="sixth"
                  className="w-7 shadow-lg h-12 text-center rounded-md shadow-xl"
                  placeholder="-"
                />

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
      </div>
      <div className="flex-col mt-12 flex items-center mr-2 ml-2">
        <CustomButton
          className={
            'bg-deactivate font-light rounded-md text-left w-full shadow-xl'
          }
        >
          Deactivate Account
        </CustomButton>
      </div>
      <div className="flex-col mt-12 flex items-center mr-2 ml-2">
        <CustomButton
          className={
            'bg-delete font-light rounded-md text-left w-full shadow-xl'
          }
        >
          Delete Account
        </CustomButton>
      </div>
    </>
  )
}

export default DeactivatePage
