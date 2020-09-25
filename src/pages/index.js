import React from "react"
import "../components/layout.css"
import Layout from "../components/layout"
import SEO from "../components/seo"
import imageCar from "../images/pastel-car.jpg"
import imageChairs from "../images/pastel-chairs.jpg"
import imageBags from "../images/pastel-bags.jpg"
import imageHeadphones from "../images/pastel-headphones.jpg"

const ProductData = [
  {
    title: "Car ride",
    price: 550,
    id: 1
  },
  {
    title: "Concert",
    price: 450,
    id: 2
  },
  {
    title: "Bags",
    price: 250,
    id: 3
  },
  {
    title: "Headphones",
    price: 300,
    id: 4
  }
  ]


const IndexPage = () => {
  let car = ProductData.find(
    product => product.id === 1);

    let concert = ProductData.find(
      product => product.id === 2);
  
  let bags = ProductData.find(
    product => product.id === 3);
    
    let headphones = ProductData.find(
      product => product.id === 4);

  return (
   <Layout>
    <SEO title="Home" />
    <h1>Welcome!</h1>
    <hr className="hr"/>

    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      Illo ut deserunt beatae earum provident adipisci nesciunt 
      cupiditate corrupti possimus, nobis laudantium. Itaque temporibus 
      quae tenetur reprehenderit. Dolores quibusdam similique optio!</p>

    <div className="imgDiv">
    <div>
        <img src={imageCar} width="300" height="auto" alt="bags" />
        <div style={{display: 'flex', justifyContent: 'space-around'}}>
          <p>{car.title}</p>
          <p>{car.price}:-</p>
          </div>
        </div>
      
      <div>
        <img src={imageChairs} width="300" height="auto" alt="bags" />
        <div style={{display: 'flex', justifyContent: 'space-around'}}>
          <p>{concert.title}</p>
          <p>{concert.price}:-</p>
          </div>
        </div>
        </div>

      <div className="imgDiv2">
        <div>
        <img src={imageBags} width="300" height="auto" alt="bags" />
        <div style={{display: 'flex', justifyContent: 'space-around'}}>
          <p>{bags.title}</p>
          <p>{bags.price}:-</p>
          </div>
        </div>
      
        <div>
        <img src={imageHeadphones} width="300" height="auto" alt="bags" />
        <div style={{display: 'flex', justifyContent: 'space-around'}}>
          <p>{headphones.title}</p>
          <p>{headphones.price}:-</p>
          </div>
        </div>
    </div>
  </Layout>
)}

export default IndexPage
