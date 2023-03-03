import React from 'react'
import PropTypes from 'prop-types'
import { ButtonColors } from '@/common/constants'
import classNames from 'classnames'

export default function CustomButton ({
  onClick,
  children,
  color = ButtonColors.green,
  isSelected = false
}) {
  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: color
      }}
      className={classNames(
        isSelected ? 'shadow-inner' : 'shadow-xl',
        'px-6 py-3 rounded-xl text-base font-medium '
      )}
    >
      {children}
    </button>
  )
}

CustomButton.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.oneOf(Object.values(ButtonColors)),
  isSelected: PropTypes.bool,
  onClick: PropTypes.func
}
