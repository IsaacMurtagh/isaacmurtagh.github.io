import React from "react"
import { graphql } from "gatsby"
import Layout from '../components/layout';
import Chip from '../components/chip';

export default function Template({ data }) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  const { tags, title } = frontmatter;
  return (
    <Layout page={title}>
      <div className="p-4">
        <div className="pb-4 space-y-2">
          {tags.map((tag, i) => (
            <div className="ml-2 inline-block">
              <Chip key={i} name={tag} />
            </div>
          ))}
        </div>
        <article
          className="prose"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </Layout>
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
        tags
      }
    }
  }
`