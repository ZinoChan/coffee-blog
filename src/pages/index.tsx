import * as React from "react"
import Hero from "../components/Hero"
import Layout from "../components/layout"
import Posts from "../components/Posts"
import Seo from "../components/seo"
import { graphql } from "gatsby"

const IndexPage = ({ data }) => {
  const image = data?.allWpPost?.edges[1].node.featuredImage?.node?.localFile

  return (
    <Layout>
      <Seo title="Home" />
      <Hero />
      <Posts image={image} />
    </Layout>
  )
}

export const query = graphql`
  query {
    allWpPost(limit: 5) {
      edges {
        node {
          featuredImage {
            node {
              localFile {
                childImageSharp {
                  gatsbyImageData(width: 600, placeholder: TRACED_SVG)
                }
              }
              title
              date
            }
          }
          content
          author {
            node {
              name
            }
          }
        }
      }
    }
  }
`

export default IndexPage
