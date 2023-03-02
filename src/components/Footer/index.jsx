import Image from 'next/image'
import React from 'react'
import qr from '../../assets/QR_code_for_mobile_English_Wikipedia.svg.webp'
import screenText from '../../../screenText'

export default function Footer () {
  const CustomComponent = ({ value }) => {
    if (value === 'qr') { return <Image src={qr} alt="" className="h-12 w-12 ml-12"></Image> }
    return <></>
  }

  return (
    <footer className="w-full bg-uhigreen">
      <div className="flex justify-evenly p-3">
        {screenText.footer.map((child) => {
          return (
            <div key={Math.random()}>
              <h2 className="font-bold text-2xl font-sans mb-2.5">
                {child.title}
              </h2>
              <ul className="text-m hidden md:block">
                {child.elements.map((element) => {
                  return (
                    <li
                      key={Math.random()}
                      className="mb-2"
                    >
                      {element.custom
                        ? (
                          <CustomComponent value={ element.value} />
                        )
                        : (
                          <a className="text-black text-lg font-sans">
                            {element.value}
                          </a>
                        )}
                    </li>
                  )
                })}
              </ul>
            </div>
          )
        })}
      </div>
    </footer>
  )
}
