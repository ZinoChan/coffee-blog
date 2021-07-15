import { getImage, StaticImage, GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import Layout from "../components/layout"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faFacebookF,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons"
import { graphql } from "gatsby"

const About = ({ data }) => {
  const { title, featuredImage, content } = data.allWpPage.edges[0]?.node

  console.log(data, title, featuredImage, content)

  const img = getImage(featuredImage?.node.localFile)

  return (
    <Layout>
      <section className="py-20 h-full">
        <div>
          <div className="flex justify-between">
            <div>
              <div className="w-32 mb-2 h-0.5 bg-secondary "></div>
              <h3 className="font-playfair text-4xl mb-10 font-bold">
                About The Author
              </h3>
            </div>
          </div>

          <div className="max-w-screen-md text-center mx-auto mb-6">
            {!img && (
              <StaticImage
                src="../images/blog.jpg"
                alt="blog image"
                width={600}
                height={400}
              />
            )}
            {img && <GatsbyImage image={img} alt="post image" />}
          </div>
          <div className="max-w-screen-md mx-auto">
            <div
              className="text-sm leading-loose font-rubik mb-4"
              dangerouslySetInnerHTML={{ __html: content }}
            />
            <div className="flex space-x-2 items-baseline">
              <span
                className="inline-block w-6 bg-rafia "
                style={{ height: 1 }}
              ></span>
              <h4 className="text-md font-rubuk font-bold">Follow Me :</h4>
              <div className="flex items-center space-x-4 text-chicago text-sm ml-8">
                <FontAwesomeIcon icon={faFacebookF} />
                <FontAwesomeIcon icon={faTwitter} />
                <FontAwesomeIcon icon={faInstagram} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query About {
    allWpPage(filter: { title: { eq: "About" } }) {
      edges {
        node {
          title
          content
          featuredImage {
            node {
              localFile {
                childImageSharp {
                  gatsbyImageData(placeholder: BLURRED)
                }
              }
            }
          }
        }
      }
    }
  }
`

export default About
