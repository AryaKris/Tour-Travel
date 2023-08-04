import React from 'react'

const Card = (props) => {
  console.log(props);
  return (
    <div>
   <div ClassName = "card">
    <img src= {`../images/${props.img}`} alt ="" className = "card--image"/>
    </div>
      </div>
  )
}

export default Card
