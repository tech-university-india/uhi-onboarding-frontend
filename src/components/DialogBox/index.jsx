import classNames from 'classnames'
import React from 'react'

export default function Dialog ({ isOpen, children }) {
  return <div className={classNames(`${isOpen ? '' : 'hidden'}`, 'bg-white shadow-xl bg-white-500 absolute top-0 left-0 bottom-0 right-0 m-auto max-w-sm  md:max-w-screen-md w-[fit-content] h-[fit-content] justify-center items-center p-10')} >
    <span>{children}</span>
  </div>
}
