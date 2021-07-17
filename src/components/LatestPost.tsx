import React from "react"
import { slideUp } from "./Hero"
import ScrollReveal from "./ScrollReveal"

const LatestPost = ({ title }) => {
  return (
    <>
      <div className="mb-4 p-6">
        <div className="mb-4">
          <ScrollReveal variants={slideUp} custom={0.7}>
            <h3 className="font-playfair text-2xl mb-4 font-bold">{title}</h3>
          </ScrollReveal>

          <ScrollReveal variants={slideUp} custom={0.8}>
            <span className="text-sm font-bold font-rubik">
              <span className="inline-block bg-secondary w-6 h-0.5 mr-1"></span>
              Read More
            </span>
          </ScrollReveal>
        </div>
        <ScrollReveal variants={slideUp} custom={0.9}>
          <span
            className="w-2/3  flex self-center bg-gray-500 inline-block"
            style={{ height: "1px" }}
          ></span>
        </ScrollReveal>
      </div>
    </>
  )
}

export default LatestPost
