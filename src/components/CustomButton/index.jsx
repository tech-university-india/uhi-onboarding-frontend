import React from 'react'

function CustomButton ({ onClick, disabled, text }) {
  return (
    <div className="flex justify-evenly w-full mt-8">
      <button className="bg-green-700 hover:bg-black text-white text-lg font-semibold px-4 py-2 rounded" disabled={disabled} onClick={onClick}>{text}</button>
    </div>
  )
}

export default CustomButton
