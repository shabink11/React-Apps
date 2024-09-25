import React, { useState } from 'react'

function Calculator() {
  const[input,setInput]=useState("")
  const[result,setResult]=useState("")
 const buttonClick=(value)=>{
     setInput(input+value)
  }
  const Result=()=>{
    const res=eval(input)
    setResult(res)
  }
  return (
    <div>
      <input type="text"  value={input}/>
      <input type="text"value={result} /><br />
      <button onClick={()=>buttonClick("9")}>9</button>
      <button onClick={()=>buttonClick("8")}>8</button>
      <button onClick={()=>buttonClick("7")}>7</button><br />
      <button onClick={()=>buttonClick("6")}>6</button>
      <button onClick={()=>buttonClick("5")}>5</button>
      <button onClick={()=>buttonClick("4")}>4</button><br />
      <button onClick={()=>buttonClick("3")}>3</button>
      <button onClick={()=>buttonClick("2")}>2</button>
      <button onClick={()=>buttonClick("1")}>1</button><br />
      <button onClick={()=>buttonClick("0")}>0</button>
      <button onClick={()=>buttonClick("+")}>+</button>
      <button onClick={()=>buttonClick("-")}>-</button>
      <button onClick={()=>buttonClick("*")}>*</button>
      <button onClick={()=>buttonClick("/")}>/</button>
      <button onClick={Result}>=</button>
    </div>
  )
}

export default Calculator
