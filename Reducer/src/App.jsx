import {react, useReducer, useState } from 'react'
import reducer from './reducer'

function App() {
  const [state,dispatch] = useReducer(reducer,{count:0})

  return (
    <div className="counter">
      <p>Count:{state.count}</p>
      <button onClick={()=>dispatch({type:'increment'})}>+</button>
      <button onClick={()=>dispatch({type:'decrement'})}>-</button>
    </div> 
  )
}

export default App
