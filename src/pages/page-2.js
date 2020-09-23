import React from "react"
import Image2 from "../components/image2"
import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => {

  return (
    <Layout>
    <SEO title="Page two" />
    <h1>About us</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      Consequatur, rerum? Eum ducimus, porro rerum ipsa perferendis 
      vero nulla non optio veniam ea officia! Dolorum placeat 
      architecto reprehenderit odit ratione in?
      Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      Consequatur, rerum? Eum ducimus, porro rerum ipsa perferendis 
      vero nulla non optio veniam ea officia! Dolorum placeat 
      architecto reprehenderit odit ratione in?</p>
    <div style={{ maxWidth: `400px`, marginBottom: `1.45rem` }}>
      <Image2 />
    </div>
  </Layout>
  )
}

export default SecondPage
