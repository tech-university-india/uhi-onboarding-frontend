import classNames from 'classnames'
import React, { createContext, useContext, useState } from 'react'
export const SnackbarContext = createContext({
  showSnackbar: ({ title, type, duration = 5000 }) => undefined
})
export default function Snackbar ({ children }) {
  const [snackBarOptions, setSnackBarOptions] = useState(null)
  const showSnackbar = ({ title, type, duration = 5000 }) => {
    setSnackBarOptions({
      enabled: true,
      content: title,
      type,
      positionFromTop: window.scrollY + 100
    })
    setTimeout(() => {
      setSnackBarOptions(null)
    }, duration)
  }

  const styles = {
    viewBox: '0 0 20 20',
    fill: 'currentColor',
    fillRule: 'evenodd',
    url: 'http://www.w3.org/2000/svg',
    icon_d: 'M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z',
    closed_d: 'M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
  }
  return (
    <SnackbarContext.Provider value={{ showSnackbar }}>
      {snackBarOptions && <div style={{ top: snackBarOptions.positionFromTop }} className={classNames(
        'bg-green-200 text-green-500 text-sm leading-none font-medium rounded-xl whitespace-no-wrap absolute left-6',
        'sm:mx-auto max-w-sm h-14 w-72 flex flex-row items-center justify-between',
        'p-3 text-sm leading-none font-medium rounded-xl whitespace-no-wrap absolute left-6',
        {
          'bg-green-200': snackBarOptions.type === 'success',
          'bg-red-200': snackBarOptions.type === 'error'
        })}>
        <div className={classNames('inline-flex items-center',
          {
            'text-green-500': snackBarOptions.type === 'success',
            'text-red-500': snackBarOptions.type === 'error'
          }
        )}>
          <svg
            xmlns={styles.url}
            className="h-4 w-4 mr-2"
            viewBox={styles.viewBox}
            fill={styles.fill}
          >
            <path
              fillRule={styles.fillRule}
              d={styles.icon_d}
              clipRule={styles.fillRule}
            />
          </svg>
          {snackBarOptions.content}
        </div>
        <button
          onClick={() => setSnackBarOptions(null)}
          className="text-green-700 cursor-pointer hover:text-green-800"
        >
          <svg
            xmlns={styles.url}
            className="h-4 w-4"
            viewBox={styles.viewBox}
            fill={styles.fill}
          >
            <path
              fillRule={styles.fillRule}
              d={styles.closed_d}
              clipRule={styles.fillRule}
            />
          </svg>
        </button>
      </div>}
      {children}
    </SnackbarContext.Provider>
  )
}

export const SnackBarController = () => {
  return useContext(SnackbarContext)
}
