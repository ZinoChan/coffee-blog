import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import "../styles/layout.css"
import { StaticImage } from "gatsby-plugin-image"

import Header from "./header"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className="bg-main relative overflow-x-hidden">
      <div className="grid grid-cols-3 fixed z-10 top-0 h-screen justify-center w-screen">
        <div className="line h-full  h-full bg-white-rock"></div>
        <div className="line h-full  h-full bg-white-rock"></div>
        <div className="line h-full  h-full bg-white-rock"></div>
      </div>
      <div className="max-w-screen-xl px-4 mx-auto relative z-20">
        <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
        <main>{children}</main>
        <footer className="grid md:grid-cols-3 grid-cols-2 justify-center py-20">
          <ul className="font-rubik self-center">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
          <div className="order-1 md:order-2 sm:col-span-1 col-span-2 text-center justify-self-center flex justify-between space-y-16 flex-col items-center">
            <StaticImage src="../images/logo.png" alt="Logo" />
            <p className="text-lg font-rubik font-bold">
              &copy; copyrights 2021 all right reserved
            </p>
          </div>
          <ul className="justify-self-end self-center font-rubik">
            <li>
              <a href="#">Facebook</a>
            </li>
            <li>
              <a href="#">Twitter</a>
            </li>
            <li>
              <a href="#">Instagram</a>
            </li>
          </ul>
        </footer>
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
