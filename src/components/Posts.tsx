import { Link } from "gatsby"
import React from "react"
import LatestPost from "./LatestPost"
import PostCard from "./PostCard"

const Posts = ({ data }) => {
  const sortedPosts = data.allWpPost?.nodes?.sort((a, b) => b.date - a.date)

  return (
    <section className="py-28 relative grid grid-cols-3 gap-8">
      <div className="col-span-2">
        <h2 className="font-main font-bold text-2xl mb-6">
          <span className="inline-block w-8 h-0.5 bg-black mr-1"></span> All
          Posts
        </h2>
        {data.allWpPost?.nodes?.map(node => (
          <Link to="/post" key={node.id}>
            <PostCard
              image={node?.featuredImage?.node.localFile}
              content={node?.content}
              title={node.title}
            />
          </Link>
        ))}
      </div>
      <div>
        <h2 className="font-main font-bold text-2xl mb-6">
          <span className="inline-block w-8 h-0.5 bg-black mr-1"></span>Latest
          Posts
        </h2>
        {sortedPosts.slice(0, 3).map(post => (
          <Link to="/post" key={post.id}>
            <LatestPost title={post.title} />
          </Link>
        ))}
      </div>
    </section>
  )
}

export default Posts
