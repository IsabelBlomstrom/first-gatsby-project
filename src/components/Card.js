import React from "react"


function Card(props) {
  return(
    <div>
    <img src={props.imageUrl} width="300" height="auto" alt="product" />
    <div style={{display: 'flex', justifyContent: 'space-around'}}>
      <p>{props.title}</p>
      <p>{props.price}:-</p>
      </div>
    </div>
  )
}

export default Card