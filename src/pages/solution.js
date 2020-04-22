import React from "react"
import {  graphql } from "gatsby"
import Layout from "../components/layout"
import Gallery from "./gallery"

export default function Page({ data }) {
  const post = data.allMarkdownRemark.edges[0]

  return (
    <div>
      <Layout>
        <hr />
        <h1>Assignment</h1>
        <div>
          <h3>{post.node.frontmatter.title}</h3>
          <small>Posted by {post.node.frontmatter.author} </small>
          <br />
          <br />

          <div dangerouslySetInnerHTML={{ __html: post.node.html }} />
          <br />
          <br />
          <hr />
          <h1 style={{textAlign: 'center'}}>Feedback</h1>
          <Gallery></Gallery>
        </div>
      </Layout>
    </div>
  )
}

export const pageQuery = graphql`
  query SolutionPostByPath {
    allMarkdownRemark {
      edges {
        node {
          id
          html
          frontmatter {
            path
            title
            date
            author
          }
          excerpt
        }
      }
    }
  }
`
