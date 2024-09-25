import { useState } from 'react'

import { BrowserRouter as Router     ,Route,Routes } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contacts from './components/Contacts'
import Container from './components/Container'

function App() {
  const [count, setCount] = useState(0)

  return (
   <Router> 
    <Container/>
      <Routes>
        <Route path='/home' Component={Home}/>
        <Route path='/about' Component={About}/>
        <Route path='/contacts' Component={Contacts}/>
      </Routes>
   
   </Router>
  )
}

export default App
