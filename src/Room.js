import React, { useState } from 'react';
import './Room.css'


function Room() {
    //const state = useState(true)
    //console.log("State =", state)
    let [isLit, setLit] = useState(false);
    let [temp, setTemp] = useState(72);
    

    return (
      <div className={`room ${isLit ? "lit" : "dark"}`}>
      This Room is {isLit? "Lit": "Dark"}
      <br/>
      
      <button onClick={ ()=> setLit(true)}>ON</button>
      <button onClick={ ()=> setLit(false)}>OFF</button>

      <br/>
      <br/>
      The current temperature is {temp}
      <br/>
      <button onClick={ ()=> setTemp(++temp)}>+</button>
      <button onClick={ ()=> setTemp(--temp)}>-</button>
    </div>
  );
}

export default Room;
