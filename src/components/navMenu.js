import * as React from 'react'
import Link from './link';
import { MenuIcon, CodeIcon } from '@heroicons/react/solid'
import { DesktopComputerIcon, HomeIcon } from '@heroicons/react/outline'
import { Popover, Transition } from '@headlessui/react'

const menuItems = [
  {
    name: 'Home',
    description: 'Take me home, Country Road...',
    link: '/',
    icon: HomeIcon,
  },
  {
    name: 'My Web App',
    description: 'I created a quiz game you can play with friends',
    link: 'https://app.admiradoco.com',
    icon: DesktopComputerIcon,
  },
  {
    name: 'Github',
    description: 'This site is open source, have a look at how i\'ve created it.',
    link: 'https://github.com/IsaacMurtagh/portfolio-gatsby',
    icon: CodeIcon,
  },
]

const navbar = () => {
  return (
    <div>
      <Popover className="relative">
        {({ open }) => (
          <>
            <Popover.Button
              className={`
                ${open ? '' : 'text-opacity-90'}
                text-white group bg-orange-700 px-3 py-2 rounded-md inline-flex items-center text-base font-medium hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
            >
              <MenuIcon
                className={`${open ? '' : 'text-opacity-70'}
                  h-8 w-8 text-orange-300 group-hover:text-opacity-80 transition ease-in-out duration-150`}
                aria-hidden="true"
              />
            </Popover.Button>
            <Transition
              as={React.Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute z-10 w-screen max-w-sm px-4 mt-2 transform -translate-x-full left-full sm:px-0 lg:max-w-3xl">
                <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                  <div className="relative grid gap-8 bg-white p-7 lg:grid-cols-2">
                    {menuItems.map((item) => (
                      <Link
                        key={item.name}
                        to={item.link}
                        className="flex items-center p-2 -m-3 transition duration-150 ease-in-out rounded-lg hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                      >
                        <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 sm:h-12 sm:w-12">
                          <item.icon aria-hidden="true" className="text-sky-400"/>
                        </div>
                        <div className="ml-4">
                          <p className="text-sm font-medium text-gray-900">
                            {item.name}
                          </p>
                          <p className="text-sm text-gray-500">
                            {item.description}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                  <div className="p-4 bg-gray-50">
                    <a
                      href="mailto:isaactheomurtagh@gmail.com"
                      className="flow-root px-2 py-2 transition duration-150 ease-in-out rounded-md hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                    >
                      <span className="flex items-center">
                        <span className="text-sm font-medium text-gray-900">
                          Get in contact
                        </span>
                      </span>
                      <span className="block text-sm text-gray-500">
                        Isaactheomurtagh@gmail.com
                      </span>
                    </a>
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </div>
  )
}

export default navbar