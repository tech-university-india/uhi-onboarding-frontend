import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

export default function CustomButton ({
  onClick,
  children,
  className = 'bg-purple-500 text-white',
  isSelected = false
}) {
  return (
    <button
      onClick={onClick}

      className={classNames(
        className,
        isSelected ? 'shadow-selected' : 'shadow-xl text-primaryButtonText',
        'px-5 py-3 text-base font-light rounded-sm'
      )}
    >
      {children}
    </button>
  )
}

CustomButton.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  isSelected: PropTypes.bool,
  onClick: PropTypes.func
}
