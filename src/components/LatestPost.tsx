import React from "react"

const LatestPost = () => {
  return (
    <>
      <div className="mb-4 p-6">
        <div className="mb-4">
          <h3 className="font-playfair text-2xl mb-4 font-bold">
            Lorem ipsum dolor sit amet consectetur
          </h3>

          <a href="#" className="text-sm font-bold font-rubik">
            <span className="inline-block bg-secondary w-6 h-0.5 mr-1"></span>
            Read More
          </a>
        </div>
        <span
          className="w-2/3  flex self-center bg-gray-500 inline-block"
          style={{ height: "1px" }}
        ></span>
      </div>
    </>
  )
}

export default LatestPost
