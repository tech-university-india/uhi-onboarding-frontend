import Dropdown from '@/components/Dropdown'
import KeyValueDisplay from '@/components/KeyValueDisplay'
import SectionTitleDisplay from '@/components/SectionTitleDisplay'
import React from 'react'
// const inter = Inter({ subsets: ['latin'] })

export default function Home () {
  return (
    <div>
      <h1 className="text-hello"><Dropdown
        title="Personal Details"
        headerComponent={({ toggleDropdown, isOpen }) => (
          <SectionTitleDisplay
            text="Personal Details"
            expanded={isOpen}
            onExpandClick={toggleDropdown}
          />
        )}
      >
        <KeyValueDisplay keyText="name" valueText="souris" />
        <KeyValueDisplay keyText="name" valueText="souris" />
        <KeyValueDisplay keyText="name" valueText="souris" />
        <KeyValueDisplay keyText="name" valueText="souris" />
      </Dropdown></h1>
    </div>
  )
}
