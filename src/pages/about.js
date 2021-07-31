import * as React from 'react'
import { Link } from 'gatsby'

const IndexPage = () => {
  return (
    <main>
      <title>About Page</title>
      <h3>This is my about page</h3>
      <Link to="/">Back home</Link>
    </main>
  )
}
export default IndexPage