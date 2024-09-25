import React, { useState } from 'react'

function Input({task,handleClick,onchsnge}) {
  
 const handleTask=(e)=>{
         onchsnge(e.target.value)
  }
  const buttonClick=()=>{
    handleClick()
    
      }
 
  return (
    <div>
      <input type="text" placeholder='Item' onChange={handleTask}/>
      <button onClick={buttonClick}> Add Item</button>
    </div>
  )
}

export default Input
