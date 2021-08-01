import React from "react"
import { graphql } from "gatsby"
import Layout from '../components/layout';

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  console.log(html)
  return (
    <Layout page={frontmatter.slug}>
      <div className="p-4">
        <article
          className="prose"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </Layout>
    // <div className="blog-post-container">
    //   <div className="blog-post">
    //     <h1>{frontmatter.title}</h1>
    //     <h2>{frontmatter.date}</h2>
    //     <div
    //       className="blog-post-content"
    //       dangerouslySetInnerHTML={{ __html: html }}
    //     />
    //   </div>
    // </div>
  )
}

export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
      }
    }
  }
`