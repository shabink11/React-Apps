import { useState } from 'react'
import Greetings from './Greetings'
import ColorChanger from './Greetings'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <ColorChanger/>
    </>
  )
}

export default App
