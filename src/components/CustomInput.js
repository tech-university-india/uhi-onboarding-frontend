import React from 'react'

export default function CustomInput ({ label, name, placeholder, type, value, onChange, error, onBlur, required, disabled, className, ...props }) {
  return <div className="flex-row">
    <div className="flex pl-1">
      <label htmlFor={name} >{label}</label>
      <div className="text-red-500 font-medium text-2xl">&nbsp;*</div>
    </div>
    <input className="w-full border rounded-md px-3 py-4 outline-none focus:shadow-outline" placeholder={placeholder} label={label} name={name} required={required} type={type} onChange={onChange} disabled={disabled} ></input>
  </div>
}
