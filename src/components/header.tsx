import * as React from "react"
import PropTypes from "prop-types"
import { StaticImage } from "gatsby-plugin-image"
import "../styles/header.css"

const Header = ({ siteTitle }) => (
  <header className="w-full py-4">
    <nav className="flex items-center justify-between">
      <div className="logo">
        <StaticImage src="../images/logo.png" alt="Logo" width={160} />
      </div>
      <div className="bars">
        <div className="bar"></div>
      </div>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
