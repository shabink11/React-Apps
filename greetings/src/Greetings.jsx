import React from 'react'
import { useState } from 'react'

function Greetings() {
  const [name, setName] = useState('')
   const Display=(e)=>{
    console.log(e.target.value)
    setName(e.target.value)
    
    
   }
    
  return (
    <div className='display'>
       Name:< input type = "text"  onChange={Display}/>
        <div className='hello'><h1>hello {name}</h1></div>
    </div>
  )
}

export default Greetings

