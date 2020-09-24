import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import imageCar from "../images/pastel-car.jpg"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Welcome!</h1>

    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      Illo ut deserunt beatae earum provident adipisci nesciunt 
      cupiditate corrupti possimus, nobis laudantium. Itaque temporibus 
      quae tenetur reprehenderit. Dolores quibusdam similique optio!</p>

    <div className="imgDiv">
      <img src={imageCar} width="300" height="auto" alt="car" />
    </div>
  </Layout>
)

export default IndexPage
