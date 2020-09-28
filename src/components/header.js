import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./layout.css"


function Header(){
 /*  
  let time = new Date();

  let currentTime =
      String(time.getHours()).padStart(2, '0') + ":" +
      String(time.getMinutes()).padStart(2, '0') + ":" +
      String(time.getSeconds()).padStart(2, '0')
      setInterval(time, 1000); */


  return(
  <header
    style={{
      background: `#ffb3ba`,
      marginBottom: `1.45rem`,
    }}
  >
    <div 
      style={{
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
        className="link"
          to="/page-2/">
          About
        </Link>
        </div>
        <div>
        <Link className="link" to="/contact/">
          Contact
          </Link> 
          </div>
          <div className="time"></div>
      </div>
      
  </header>
)}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
