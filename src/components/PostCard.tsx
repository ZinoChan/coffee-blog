import { GatsbyImage, getImage } from "gatsby-plugin-image"
import React from "react"

const PostCard = ({ image }) => {
  const Img = getImage(image)

  return (
    <div className="flex items-end space-x-4 mb-6">
      <div className="post-img">
        {/* <StaticImage src="../images/blog.jpg" alt="Blog Image " /> */}
        <GatsbyImage image={Img} alt="image" />
      </div>
      <div className="post-text">
        <h3 className="font-playfair text-2xl mb-4 font-bold">
          Lorem ipsum dolor sit amet consectetur
        </h3>
        <p className="text-md font-rubik mb-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia sequi
          voluptatem voluptatum, adipisci saepe illum, voluptates nam.
        </p>
        <span className="text-sm font-bold font-rubik">
          <span className="inline-block bg-secondary w-6 h-0.5 mr-1"></span>
          Read More
        </span>
      </div>
    </div>
  )
}

export default PostCard
