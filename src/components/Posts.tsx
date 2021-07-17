import { Link } from "gatsby"
import React from "react"
import LatestPost from "./LatestPost"
import PostCard from "./PostCard"
import "../styles/posts.css"
import { slideUp } from "./Hero"
import ScrollReveal from "./ScrollReveal"

const Posts = ({ data }) => {
  const posts = data.allWpPost?.nodes
  const sortedPosts = data.allWpPost?.nodes?.sort((a, b) => b.date - a.date)

  return (
    <section className="py-28 mt-20 relative grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
      <div className="lg:col-span-2 all-posts ">
        <ScrollReveal variants={slideUp} custom={0.4}>
          <h2 className="font-main font-bold lg:text-2xl text-xl mb-6">
            <span className="inline-block w-8 h-0.5 bg-black mr-1"></span> All
            Posts
          </h2>
        </ScrollReveal>
        {posts?.map(node => (
          <Link to={`/post/${node.slug}`} key={node.id}>
            <PostCard
              image={node?.featuredImage?.node.localFile}
              content={node?.content}
              title={node.title}
            />
          </Link>
        ))}
      </div>
      <div>
        <ScrollReveal variants={slideUp} custom={0.4}>
          <h2 className="font-main font-bold lg:text-2xl text-xl mb-6">
            <span className="inline-block w-8 h-0.5 bg-black mr-1"></span>Latest
            Posts
          </h2>
        </ScrollReveal>

        {sortedPosts.slice(0, 3).map(post => (
          <Link to={`/post/${post.slug}`} key={post.id}>
            <LatestPost title={post.title} />
          </Link>
        ))}
      </div>
    </section>
  )
}

export default Posts
