import React from "react"
import "../components/layout.css"
import Layout from "../components/layout"
import SEO from "../components/seo"
import imageChairs from "../images/pastel-chairs.jpg"
import imageBags from "../images/pastel-bags.jpg"
import imageHeadphones from "../images/pastel-headphones.jpg"
import Card from "../components/Card"
import imageCar from "../images/pastel-car.jpg"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />

      <h1>Welcome!</h1>
      <hr className="hr" />

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo ut
        deserunt beatae earum provident adipisci nesciunt cupiditate corrupti
        possimus, nobis laudantium. Itaque temporibus quae tenetur
        reprehenderit. Dolores quibusdam similique optio!
      </p>

      <div className="imgDiv">
        <Card title="Car ride" price="550" id="1" imageUrl={imageCar} />
        <Card title="Concert" price="450" id="2" imageUrl={imageChairs} />
      </div>

      <div className="imgDiv2">
        <Card title="Bags" price="250" id="3" imageUrl={imageBags} />
        <Card
          title="Headphones"
          price="300"
          id="4"
          imageUrl={imageHeadphones}
        />
      </div>
    </Layout>
  )
}

export default IndexPage
