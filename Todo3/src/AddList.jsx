import React from 'react'

function AddList({list,onDel}) {
 const HandleDel=(item)=>{
    onDel(item)

  }
  return (
    <div>{
      list.map((item,index)=><>
      <li key={index}>{item}</li>
      <button onClick={HandleDel}>Del</button>
      </>

      )
    }
    </div>
  )
}

export default AddList
