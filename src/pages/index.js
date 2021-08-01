import * as React from 'react'
import Layout from '../components/layout';
import PostLink from '../components/postLink';
import { graphql } from "gatsby"

const IndexPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  console.log(edges)
  return (
    <Layout page='Home'>
      <div className="p-4">
        <div className="text-gray-900 text-3xl text-base mb-4">
          Featured Projects
        </div>
        {edges.map(edge => <PostLink post={edge.node} />)}
      </div>
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            slug
            title
          }
        }
      }
    }
  }
`