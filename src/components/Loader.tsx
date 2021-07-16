import React from "react"
import "../styles/loader.css"
import { useState } from "react"
import { useEffect } from "react"

const Loader = ({ setLoading, loading }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2500)

    return () => clearTimeout(timer)
  })

  return (
    <div
      className={`flex items-center justify-center fixed top-0 left-0 h-screen w-screen z-50 bg-rafia 
        ${!loading && "hide"} 
      `}
    >
      <div className="loading-content">
        <h1 className="font-bold font-main text-chicago  text-6xl capitalize loading mb-8">
          coffee blog
        </h1>
        <div className=" mb-6 w-60 mx-auto  rounded-full h-3 border-2 border-chicago">
          <div className="loading-bar h-full  bg-chicago "></div>
        </div>
      </div>
    </div>
  )
}

export default Loader
