import React from "react"
import { slideUp } from "./Hero"
import ScrollReavel from "./ScrollReavel"

const LatestPost = ({ title }) => {
  return (
    <>
      <div className="mb-4 p-6">
        <div className="mb-4">
          <ScrollReavel variants={slideUp} custom={0.7}>
            <h3 className="font-playfair text-2xl mb-4 font-bold">{title}</h3>
          </ScrollReavel>

          <ScrollReavel variants={slideUp} custom={0.8}>
            <span className="text-sm font-bold font-rubik">
              <span className="inline-block bg-secondary w-6 h-0.5 mr-1"></span>
              Read More
            </span>
          </ScrollReavel>
        </div>
        <ScrollReavel variants={slideUp} custom={0.9}>
          <span
            className="w-2/3  flex self-center bg-gray-500 inline-block"
            style={{ height: "1px" }}
          ></span>
        </ScrollReavel>
      </div>
    </>
  )
}

export default LatestPost
