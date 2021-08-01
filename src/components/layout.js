import * as React from 'react'
import Navbar from './navbar';
import SideFeed from './sideFeed'

const Layout = ({ page, children }) => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar page={page}/>
      <main className="-mt-16">
        <div className="flex justify-center">
          <div className="hidden lg:block mx-4">
            <div className="rounded-md bg-white w-72 shadow">
              <SideFeed />
            </div>
          </div>
          <div className="mx-2 lg:mx-4 rounded-md bg-white max-w-3xl w-full shadow">
            {children}
          </div>
        </div>
      </main>
    </div>
  )
}

export default Layout