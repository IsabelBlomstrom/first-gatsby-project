import React from "react"
import "../components/layout.css"
import Layout from "../components/layout"
import SEO from "../components/seo"
import imageCar from "../images/pastel-car.jpg"
import imageChairs from "../images/pastel-chairs.jpg"
import imageBags from "../images/pastel-bags.jpg"
import imageHeadphones from "../images/pastel-headphones.jpg"

const IndexPage = () => (
  
  <Layout>
    <SEO title="Home" />
    <h1>Welcome!</h1>
    <hr className="hr"/>

    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      Illo ut deserunt beatae earum provident adipisci nesciunt 
      cupiditate corrupti possimus, nobis laudantium. Itaque temporibus 
      quae tenetur reprehenderit. Dolores quibusdam similique optio!</p>

    <div className="imgDiv">
      <img src={imageCar} width="300" height="auto" alt="car" />
      <img src={imageChairs} width="300" height="auto" alt="chairs" />
      </div>
      <div className="imgDiv2">
      <img src={imageBags} width="300" height="auto" alt="bags" />
      <img src={imageHeadphones} width="300" height="auto" alt="headphones" />
    </div>
  </Layout>
)

export default IndexPage
