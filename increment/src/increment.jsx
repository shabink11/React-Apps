import { useState } from 'react';
import React from 'react'

function Counter() {
  const [count, setCount] = useState(0)
  
 
 const Increment=()=>{
  console.log("bclicked")
    setCount(count+1);
    console.log(count)
   
  }
  
  
  

  return (
    <div className='app'>
     
      increment: <button onClick={Increment}>add</button><br/>
      <div className='number'>
         {count}
      </div>
    </div>
  )
  
}

export default Counter
