import React, { createContext, useContext, useState } from "react";
export const SnackbarContext = createContext();
export default function Snackbar({ children }) {
  const [enabled, setEnabled] = useState(false);
  return (
    <SnackbarContext.Provider value={{ setEnabled }}>
      {children}
      <div className={enabled ? "" : "hidden"}>
        {/* SHREYAS MAKE CODE FOR SNACKBAR HERE */}

        <div class="mx-2 mb-8 sm:mx-auto max-w-sm h-14 flex flex-row items-center justify-between bg-green-200 p-3 text-sm leading-none font-medium rounded-xl whitespace-no-wrap">
          <div class="inline-flex items-center text-green-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4 mr-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clip-rule="evenodd"
              />
            </svg>
            Login Successfully
          </div>
          <button
            onClick={() => setEnabled(true)}
            class="text-green-700 cursor-pointer hover:text-green-800"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
    </SnackbarContext.Provider>
  );
}

export const SnackBarController = () => {
  return useContext(SnackbarContext);
};
