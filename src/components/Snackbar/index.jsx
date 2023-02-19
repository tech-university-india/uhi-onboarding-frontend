import React, { createContext, useContext, useState } from 'react'
export const SnackbarContext = createContext()
export default function Snackbar ({ children }) {
  const [enabled, setEnabled] = useState(false)
  return (
    <SnackbarContext.Provider value={{ setEnabled }} >
      { children }
      <div className={enabled ? '' : 'hidden'}>
        {/* SHREYAS MAKE CODE FOR SNACKBAR HERE */}

      </div>
    </SnackbarContext.Provider>
  )
}

export const SnackBarController = () => {
  return useContext(SnackbarContext)
}
