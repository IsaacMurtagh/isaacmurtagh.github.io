import * as React from 'react'
import Layout from '../components/layout';
import { Link } from 'gatsby'

const IndexPage = () => {
  return (
    <Layout page='Home'>
      <div className="p-4">
        <Link to="/projects/serverless-quizzes/">Serverless quizzes</Link>
      </div>
    </Layout>
  )
}
export default IndexPage