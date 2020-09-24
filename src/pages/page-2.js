import React from "react"
import imageClock from "../images/pastel-clock.jpg"
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

    <div className="imgDiv">
    <img src={imageClock} width="300" height="auto" alt="clock" />
    </div>
  </Layout>
  )
}

export default SecondPage
