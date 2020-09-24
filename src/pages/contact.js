import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Contactform from "../components/contactform"

const ContactPage = () => (
  <Layout>
    <Contactform />
    <Link to="/">Home</Link> <br />

  </Layout>
  )

export default ContactPage
