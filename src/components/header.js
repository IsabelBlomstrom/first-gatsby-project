import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./layout.css"

const Header = () => (
  <header
    style={{
      background: `#ffb3ba`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        padding: `1.5rem 1rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
            margin: `0.5rem`,
          }}
        >
          Pastel Pipe
        </Link>
      </h1>
    </div>
    
    <div 
    className="nav-links">    
        <div><Link
          to="/page-2/"
          style={{
            color: `white`,
            textDecoration: `none`,
            margin: `0.5rem`,
          }}
        >
          About
        </Link>
        </div>
        <div>
        <Link to="/page-3/"
        style={{
          color: `white`,
          textDecoration: `none`,
        }}>
          Contact
          </Link> 
          </div>
      </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
