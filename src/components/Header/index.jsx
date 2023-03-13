import React from 'react'

import PropTypes from 'prop-types'

export default function Header ({ text }) {
  return <header className="bg-primary shadow-header p-3 w-full rounded-md rounded-t-none">
    <h1 className="text-3xl font-light">{text}</h1>
  </header>
}

Header.propTypes = {
  text: PropTypes.string.isRequired
}
