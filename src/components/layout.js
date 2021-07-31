import * as React from 'react'
import { Link } from 'gatsby'

const Layout = ({ page, children }) => {
  return (
    <div className="flex justify-center">
      <title>{page}</title>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </nav>
      <main>
        <h1>{page}</h1>
        {children}
      </main>
    </div>
  )
}

export default Layout