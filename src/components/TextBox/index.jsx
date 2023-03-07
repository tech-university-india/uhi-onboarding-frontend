import React from 'react'
import PropTypes from 'prop-types'

function TextBox ({ onChange, placeholder, disabled, noBg, partialText, text }) {
  // The following are used to calculate the padding required by the text being entered
  // into the textbox in the partialText mode so that the entered text does not overlap
  // onto the partialText.

  const PAD_PARTIAL_TEXT_DOT = 0.625
  const PAD_PARTIAL_TEXT_NO_DOT = 0.68
  const PAD_PARTIAL_TEXT = `${partialText === undefined
    ? 0
    : (partialText?.length * (partialText?.startsWith('.') ? PAD_PARTIAL_TEXT_DOT : PAD_PARTIAL_TEXT_NO_DOT))}rem`

  return (
    <>
      {partialText !== undefined
        ? <div className="relative">
          <input type="text" disabled={disabled} className={`disabled:text-preFillText p-3 w-full rounded-lg ${disabled ? 'shadow-textBoxInset' : 'shadow-textBox'} ${noBg ? '' : 'bg-textBox'} text-right`}
            style={{
              paddingRight: PAD_PARTIAL_TEXT
            }}
            onChange={(event) => {
              const eventCopy = { ...event, target: { ...event.target, value: event.target.value + partialText } }
              onChange(eventCopy)
            }}
            placeholder={placeholder}
            value={text}
          />
          <span className={'absolute block right-3 top-3 z-10 text-preFillText'}>{partialText}</span>
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
