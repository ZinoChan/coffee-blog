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
import ScrollReveal from "./ScrollReveal"
import { slideToLeft, slideToRight } from "./PostCard"
import { slideUp } from "./Hero"

const Post = ({ data }) => {
  const { title, featuredImage, content } = data.wpPost

  const img = getImage(featuredImage?.node.localFile)

  return (
    <Layout>
      <section className="py-20">
        <div>
          <div className="flex justify-between">
            <div>
              <ScrollReveal variants={slideToRight} custom={0.1}>
                <div className="w-32 mb-2 h-0.5 bg-secondary "></div>
              </ScrollReveal>
              <ScrollReveal variants={slideUp} custom={0.2}>
                <h3 className="font-playfair text-4xl mb-10 font-bold">
                  {title}
                </h3>
              </ScrollReveal>
            </div>
            <ScrollReveal variants={slideToLeft} custom={0.2}>
              <div className="flex items-center space-x-4 text-chicago text-sm">
                <FontAwesomeIcon icon={faFacebookF} />
                <FontAwesomeIcon icon={faTwitter} />
                <FontAwesomeIcon icon={faInstagram} />
              </div>
            </ScrollReveal>
          </div>
          <ScrollReveal variants={slideUp} custom={0.3}>
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
          </ScrollReveal>
          <div className="max-w-screen-md mx-auto">
            <ScrollReveal variants={slideUp} custom={0.4}>
              <div
                className="text-sm leading-loose font-rubik mb-4"
                dangerouslySetInnerHTML={{ __html: content }}
              />
            </ScrollReveal>
            <div className="flex space-x-2 items-baseline">
              <span
                className="inline-block w-6 bg-rafia "
                style={{ height: 1 }}
              ></span>
              <h4 className="text-md font-rubuk font-bold">Zino chan</h4>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query Post($slug: String) {
    wpPost(slug: { eq: $slug }) {
      content
      id
      title
      author {
        node {
          name
        }
      }
      featuredImage {
        node {
          localFile {
            childImageSharp {
              gatsbyImageData(placeholder: TRACED_SVG)
            }
          }
        }
      }
    }
  }
`

export default Post
