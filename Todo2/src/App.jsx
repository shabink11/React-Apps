import { useState } from 'react'
import Input from './Components/Input'
import AddList from './Components/AddList'


function App() {

  const[task,setTask]=useState("0")
  const[list,setLIst]=useState(["Learn React","Build an app"])
  const handleClick=()=>{
   
    setLIst([...list,task])
    console.log(list)
      }
    const onchsnge=(val)=>{
      setTask(val)
    }
    const onDelete = (index) => {
      console.log(index);
      
      // Create a copy of the list
      const tempList = [...list];
      
      // Remove the item at the given index
      tempList.splice(index, 1);
      
      console.log(tempList);
      
      // Update the state with the new list
      setLIst(tempList);
    }
    
  return (
    <>
      <div><h1> To-Do-App</h1></div>
      <div>
        <Input task={task} handleClick={handleClick} onchsnge={onchsnge} />
      </div>
      <br />
      <br />
      <h3>list items</h3>
      <AddList list={list}  onDelete={onDelete} />
    </>
  )
}

export default App
