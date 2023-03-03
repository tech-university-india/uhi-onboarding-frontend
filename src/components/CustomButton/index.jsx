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
        !isSelected ? 'shadow-inner' : 'shadow-xl',
        'px-8 py-3 rounded-xl text-base font-medium '
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
