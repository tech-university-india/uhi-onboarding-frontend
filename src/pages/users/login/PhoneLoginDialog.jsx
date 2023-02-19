import classNames from 'classnames'
import React from 'react'
import { login } from '../../../../screenText'

export default function PhoneLoginDialog ({ handlePhoneLoginUserSelection, users }) {
  const [selectedUser, setSelectedUser] = React.useState(-1)
  return <div className="flex flex-col">
    <div className="my-5 ">
      <p className="text-xl font-semibold">
        {login.phoneDialogTitle}
      </p>
    </div>
    {users.map((user, index) => (
      <div onClick={() => { setSelectedUser(index) }} key={index} className="flex justify-between shadow hover:shadow-xl hover:bg-green-400 bg-green-100 py-3 px-4 my-2 ">
        <span>
          <p>Name: {user.name}</p>
          <p>Health ID: {user.healthId}</p>
        </span>
        <div className={classNames(`${selectedUser === index ? 'bg-green-600' : 'bg-white'}`, 'w-4 self-center h-4 rounded-full')} >{' '}</div>
      </div>
    ))}
    <button className="disabled:bg-gray-400 shadow-2xl hover:shadow-none self-end mt-5 bg-green-600 px-6 py-3 rounded-md text-white font-bold" onClick={() => handlePhoneLoginUserSelection(selectedUser)} disabled={selectedUser === -1}>LOGIN</button>
  </div>
}
