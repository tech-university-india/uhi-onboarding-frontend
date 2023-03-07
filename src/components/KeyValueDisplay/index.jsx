import React from 'react'
import Image from 'next/image'
import PropTypes from 'prop-types'

import editSvg from '../../../public/edit.svg'

export default function KeyValueDisplay ({ keyText, valueText, onEditClick }) {
  return <div className="p-4 w-full flex flex-row border-opacity-5 justify-between items-center border border-gray-100 bg-white drop-shadow-keyValueDisplay">
    <span className="drop-shadow-none">{keyText}</span>
    <div className="flex flex-row justify-end items-center">
      <span className="drop-shadow-none">{valueText}</span>
      {onEditClick &&
        <button className="pl-2 bg-transparent" onClick={onEditClick}>
          <Image src={editSvg} alt="Edit" />
        </button>
      }
    </div>
  </div>
}

KeyValueDisplay.propTypes = {
  keyText: PropTypes.string.isRequired,
  valueText: PropTypes.string.isRequired,
  onEditClick: PropTypes.func
}
