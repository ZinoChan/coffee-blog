import * as React from "react"

import { GatsbyImage } from "gatsby-plugin-image"
import "../styles/header.css"
import { Squeeze as Hamburger } from "hamburger-react"
import { useState } from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import { motion } from "framer-motion"

const Header = ({ siteTitle, logo }) => {
  const [isOpen, setOpen] = useState(false)

  const data = useStaticQuery(graphql`
    query headerData {
      allWpPage {
        edges {
          node {
            title
            id
            uri
          }
        }
      }
    }
  `)

  return (
    <motion.header
      initial={{ opacity: 0, y: -180 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        ease: [0.6, 0.01, -0.05, 0.95],
        duration: 1,
        delay: 2,
      }}
      className="w-full py-4"
    >
      <nav className="flex items-center justify-between">
        <Link to="/">
          <div className="logo relative z-50">
            {/* <StaticImage src="../images/logo.png" alt="Logo" width={160} /> */}
            {logo && <GatsbyImage image={logo} alt="image" />}
          </div>
        </Link>
        <button onClick={() => setOpen(!isOpen)} className="relative z-50">
          <Hamburger size={32} toggled={isOpen} toggle={setOpen} />
        </button>
        <ul
          className={`
        ${isOpen ? "opacity-100 h-screen" : "opacity-0 h-0"}
        transition-all duration-300 z-10 w-screen
         overflow-hidden bg-rafia fixed top-0 left-0 
         flex flex-col items-center 
         justify-center space-y-12`}
        >
          {data.allWpPage?.edges?.map(({ node }, index) => (
            <li
              key={node.id}
              className={`
            transition-all duration-500 delay-${
              index === 0 ? 100 : index * 150
            } 
            transform ${
              isOpen
                ? "translate-y-0 opacity-100"
                : "-translate-y-100 opacity-0"
            }`}
            >
              <Link to={node.uri} className="text-3xl  font-bold font-main">
                {node.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </motion.header>
  )
}

export default Header
