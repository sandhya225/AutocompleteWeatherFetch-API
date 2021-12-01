import React from "react";
import { useState } from "react";
import Buton from "./Buton";
interface cardData {
  name: string,
  degree: number,
  speed: number
}
const Card = ({name,degree,speed} : cardData) =>{
    const [showdet,setShowdet] = React.useState(true);
    const showMSg: string = "Nothing to show"
    return <div>
      { showdet ? <div className="card shadow">
    <div className="card-header">
      Show Weather Details
    </div>
    <div className="card-body" >
      <p className="card-text float-left">Name : {name}</p>
      <p className="card-text float-left">Degree: {degree}</p>
      <p className="card-text float-left">Speed : {speed}</p>

    </div>

  </div> : <h1>Nothing to Show</h1> }
  <button value="" onClick={()=>setShowdet(true)}>Show Card</button>
  <button value="" onClick={()=>setShowdet(false)}>Hide Card</button>

        </div>
}
export default Card;
