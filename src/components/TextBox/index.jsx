import React from 'react'
import PropTypes from 'prop-types'

import styles from './TextBox.module.css'

function TextBox ({ onChange, placeholder, disabled, noBg, partialText, text }) {
  const PAD_PARTIAL_TEXT_DOT = 0.625
  const PAD_PARTIAL_TEXT_NO_DOT = 0.68
  const PAD_PARTIAL_TEXT = `${(partialText?.length * (partialText?.startsWith('.') ? PAD_PARTIAL_TEXT_DOT : PAD_PARTIAL_TEXT_NO_DOT))}rem`

  return (
    <>
      {partialText !== undefined
        ? <div className={styles['input-box']}>
          <input type="text" disabled={disabled} className={`disabled:text-preFillText p-3 w-full rounded-lg ${disabled ? 'shadow-textBoxInset' : 'shadow-textBox'} ${noBg ? '' : 'bg-textBox'} ${styles['partial-input']}`}
            style={{
              paddingRight: PAD_PARTIAL_TEXT
            }}
            onChange={onChange}
            placeholder={placeholder}
            value={text}
          />
          <span className={`${styles['fixed-text']} text-preFillText`}>{partialText}</span>
        </div>
        : <input type="text" disabled={disabled} className={`disabled:text-preFillText p-3 w-full rounded-lg ${disabled ? 'shadow-textBoxInset' : 'shadow-textBox'} ${noBg ? '' : 'bg-textBox'}`}
          onChange={onChange}
          placeholder={placeholder}
          value={text}
        />}
    </>
  )
}

TextBox.propTypes = {
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  noBg: PropTypes.bool,
  partialText: PropTypes.string,
  text: PropTypes.string
}

TextBox.defaultProps = {
  noBg: false,
  placeholder: ''
}

export default TextBox
