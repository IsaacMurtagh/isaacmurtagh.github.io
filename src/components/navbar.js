import * as React from 'react'
import { CodeIcon } from '@heroicons/react/solid'
import { Link } from 'gatsby'
import NavMenu from './navMenu';


const navbar = ({ page }) => {
  return (
    <div>
      <title>{page}</title>
      <div className="bg-gradient-to-r from-sky-700 to-cyan-500 p-4 lg:px-8 pb-24">
        <div className="flex items-center text-gray-200">
          <Link to="/" className="flex items-center space-x-4">
            <CodeIcon className="h-12 w-12"/>
            <span className="text-xl">Isaac Murtagh</span>
          </Link>
          <div className="flex flex-grow" />
          <NavMenu />
        </div>
      </div>
    </div>
  )
}

export default navbar