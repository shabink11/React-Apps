import React from 'react'
function Input({list,Change,HandleClick}) {
    const InputValue=(e)=>{
      Change(e.target.value)
    }
    const ButtonClick=()=>{
            HandleClick()
      console.log(list)
    }
  return (
    <div>
      <input type="text" placeholder='name' onChange={InputValue} />
      <button onClick={ButtonClick}>Add</button>
          </div>
  )
}

export default Input
