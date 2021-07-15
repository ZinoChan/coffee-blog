import React from "react"
import "../styles/loader.css"
import { useState } from "react"
import { useEffect } from "react"

const Loader = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 4000)

    return () => clearTimeout(timer)
  })

  return (
    <div
      className={`flex items-center justify-center fixed top-0 left-0 h-screen w-screen z-50 bg-main 
        ${!loading && "hidden"} 
      `}
    >
      <h1 className="font-bold font-main text-white-rock  text-6xl capitalize loading">
        coffee blog
      </h1>
    </div>
  )
}

export default Loader
