import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faAngleLeft } from '@fortawesome/free-solid-svg-icons'

function Dropdown ({ title, children }) {
  const [isOpen, setIsOpen] = useState(false)

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="relative flex justify-center mb-4">
      <button
        className="bg-options text-black px-4 rounded w-5/6 h-12 flex justify-between items-center"
        onClick={toggleDropdown}
      >
        {title}
        <div className="icons">
          {!isOpen && (
            <FontAwesomeIcon icon={faAngleDown} style={{ color: '#008080' }} />
          )}
          {isOpen && (
            <FontAwesomeIcon icon={faAngleLeft} style={{ color: '#008080' }} />
          )}
        </div>
      </button>

      {isOpen && (
        <div
          className="absolute top-10 left-1/2 transform -translate-x-1/2 bg-white w-5/6 mb-4 mt-2"
          style={{ zIndex: 10 }}
        >
          <div className="flex flex-col justify-center w-full">
            {React.Children.map(children, (child, index) => (
              <div
                key={index}
                className="dropdown-item flex justify-between p-4 shadow-md"
              >
                {child}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default Dropdown
