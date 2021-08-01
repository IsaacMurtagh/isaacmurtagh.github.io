import * as React from 'react'
import Navbar from './navbar';
import SideFeed from './sideFeed'

const Layout = ({ post }) => {
  return (
    <div>
      {post.excerpt}
    </div>
  )
}

export default Layout