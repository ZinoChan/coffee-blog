import { Link } from "gatsby"
import React from "react"
import LatestPost from "./LatestPost"
import PostCard from "./PostCard"

const Posts = ({ image }) => {
  return (
    <section className="py-28 relative grid grid-cols-3 gap-8">
      <div className="col-span-2">
        <h2 className="font-main font-bold text-2xl mb-6">
          <span className="inline-block w-8 h-0.5 bg-black mr-1"></span> All
          Posts
        </h2>
        <Link to="/post">
          <PostCard image={image} />
        </Link>
      </div>
      <div>
        <h2 className="font-main font-bold text-2xl mb-6">
          <span className="inline-block w-8 h-0.5 bg-black mr-1"></span>Latest
          Posts
        </h2>
        <LatestPost />
        <LatestPost />
        <LatestPost />
      </div>
    </section>
  )
}

export default Posts
