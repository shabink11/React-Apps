import React, { useState } from 'react'

function TempConverter() {
    const[celsius,setCelsius]=useState("")
    const[fahrenheit,setFahrenheit]=useState("")

   const HandleCelciusToFaren = () =>{
    var farren =celsius*100;
    setFahrenheit(farren)
    
   }
    
    
  return (
    <div>
      <input type="text"placeholder='Celsius' value={celsius} onChange={(e)=>setCelsius(e.target.value)} />
      <input type="text" placeholder='fahernheit' value={fahrenheit}/>
      <button onClick={HandleCelciusToFaren}>Convert to fah</button>
     
    </div>
  )
}

export default TempConverter
