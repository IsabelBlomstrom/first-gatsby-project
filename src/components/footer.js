import React from "react"
import "./layout.css"

const Footer = () => {
  return (
    <footer style={{
      marginTop: `2rem`,
      background: `#ffb3ba`,
      color: `white`
    }}>
      <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      © {new Date().getFullYear()}, Built with
      {` `}
      <a href="https://www.gatsbyjs.com" 
      style={{
        color: `white`,
        textDecoration: `none`,
      }}>
        Gatsby
        </a>
      </div>
    </footer>
  )
}

export default Footer