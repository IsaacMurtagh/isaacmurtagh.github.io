import * as React from 'react'
import Navbar from './navbar';

const Layout = ({ page, children }) => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar page={page}/>
      <main className="flex justify-center">
        {/* <div className="hidden lg:inline mx-4 my-6 rounded bg-white w-72 shadow-sm">
          <div className="p-4">
            <div className="text-gray-900 text-lg text-base">
              Projects
            </div>
          </div>
        </div> */}
        <div className="mx-2 my-4 lg:mx-4 lg:my-6 rounded bg-white max-w-3xl w-full shadow-sm">
          {children}
        </div>
      </main>
    </div>
  )
}

export default Layout