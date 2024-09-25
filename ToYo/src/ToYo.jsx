import React,{ useState } from 'react'

function ToYo() {
  const [task,setTask]=useState("0")
  const[toYoList,settoYoList]=useState(["football","music"])

  const handleTask=(e)=>{
    console.log(e.target.value)
     setTask(e.target.value)
  }
  const add=()=>{
    console.log("....")
    settoYoList([...toYoList,task])
  }

    
  return (
    <div>
     interested in: <input type="text" onChange={handleTask}/>
      <button onClick={add}>Add</button >
      {/* <ul>
      <li>football</li>
      <li>music</li>
      </ul> */}
    
    </div>
  )
}

export default ToYo
