import React from 'react'
import PropTypes from 'prop-types'
import { ButtonColors } from '@/common/constants'
import classNames from 'classnames'

export default function CustomButton ({
  children,
  color = ButtonColors.green,
  isSelected = false
}) {
  return (
    <button
      className={classNames(
        !isSelected ? 'shadow-lg' : 'shadow-inner',
        'px-6 py-3 rounded-lg text-base font-medium border-r-2'
      )}
      style={{
        backgroundColor: color
      }}
    >
      {children}
    </button>
  )
}

CustomButton.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.oneOf(Object.values(ButtonColors)),
  isSelected: PropTypes.bool
}
