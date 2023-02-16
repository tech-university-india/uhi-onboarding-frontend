import React, { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import Link from 'next/link'

function classNames (...classNamees) {
  return classNamees.filter(Boolean).join(' ')
}

export default function Dropdown () {
  return (

    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="mx-auto hidden md:flex space-x-10 hover:font-extrabold hover:rounded-full hover:bg-green-500 w-full justify-center rounded-md bg-uhigreen px-4 py-2 text-2xl font-medium text-black focus:outline-none focus:ring-2 focus:ring-uhigreen focus:ring-offset-2 focus:ring-offset-uhigreen">
                    About
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-uhigreen-secondary shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <Link
                  href="/"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                                    UHI
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link
                  href="/about/doctors"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                                    DOCTORS
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link
                  href="/about/citizens"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                                    CITIZENS
                </Link>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}
