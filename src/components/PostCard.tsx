import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image"
import React from "react"
import { slideUp } from "./Hero"
import ScrollReavel from "./ScrollReavel"

export const slideToLeft = {
  initial: { opacity: 0, x: 60 },
  animate: (i = 1.7) => ({
    opacity: 1,
    x: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1,
      delay: i,
    },
  }),
}

export const slideToRight = {
  initial: { opacity: 0, x: -60 },
  animate: (i = 1.7) => ({
    opacity: 1,
    x: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1,
      delay: i,
    },
  }),
}

const PostCard = ({ image, title, content }) => {
  const img = getImage(image)

  return (
    <div className="flex items-end lg:flex-row flex-col lg:space-x-4 mb-6">
      <ScrollReavel variants={slideToRight} custom={0.5}>
        <div className="post-img filter grayscale hover:grayscale-0">
          {!img && <StaticImage src="../images/blog.jpg" alt="Blog Image " />}
          {img && <GatsbyImage image={img} alt="image" />}
        </div>
      </ScrollReavel>
      <ScrollReavel variants={slideToLeft} custom={0.5}>
        <div className="py-4 lg:py-0 lg:px-4">
          <h3 className="font-playfair text-2xl mb-4 font-bold">{title}</h3>

          <div
            className="text-md font-rubik mb-2"
            dangerouslySetInnerHTML={{ __html: `${content.slice(0, 120)}...` }}
          />

          <span className="text-sm font-bold font-rubik">
            <span className="inline-block bg-secondary w-6 h-0.5 mr-1"></span>
            Read More
          </span>
        </div>
      </ScrollReavel>
    </div>
  )
}

export default PostCard
