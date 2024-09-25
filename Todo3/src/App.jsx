import { useState } from 'react'
import Input from './input'
import AddList from './AddList'
function App() { 
  const OnChange=(val)=>{
   setCount(val)
  } 
  return (
    <>
      <Input list={list} HandleClick={HandleClick} Change={OnChange} />
      <AddList list={list} onDel={onDel}/>
    </>
  )
}
export default App
