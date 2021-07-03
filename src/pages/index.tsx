import * as React from "react"
import Hero from "../components/Hero"
import Layout from "../components/layout"
import Posts from "../components/Posts"
import Seo from "../components/seo"
import { graphql } from "gatsby"

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <Seo title="Home" />
      <Hero />
      <Posts data={data} />
    </Layout>
  )
}

export const query = graphql`
  query {
    allWpPost(limit: 8) {
      nodes {
        id
        content
        title
        date
        featuredImage {
          node {
            localFile {
              childImageSharp {
                gatsbyImageData(
                  placeholder: TRACED_SVG
                  width: 390
                  height: 340
                )
              }
            }
          }
        }
        author {
          node {
            name
          }
        }
      }
    }
  }
`

export default IndexPage
