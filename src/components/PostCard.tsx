import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image"
import React from "react"

const PostCard = ({ image, title, content }) => {
  const img = getImage(image)

  return (
    <div className="flex items-end lg:flex-row flex-col lg:space-x-4 mb-6">
      <div className="post-img filter grayscale hover:grayscale-0">
        {!img && <StaticImage src="../images/blog.jpg" alt="Blog Image " />}
        {img && <GatsbyImage image={img} alt="image" />}
      </div>
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
    </div>
  )
}

export default PostCard
