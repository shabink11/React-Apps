import { useState } from 'react'
import {BrowserRouter as Router   ,Route,Routes} from "react-router-dom"
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Container from './components/Container'
import Product from './sidebar/Product'
import Category from './sidebar/Category'

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
     <Router>
    <Container/>
      <div>
        <Routes>
          <Route path='/Home' Component={Home}/>
          <Route path='/About' Component={About}/>
          <Route path='/Contact' Component={Contact}/>
        </Routes>
      </div>
      <div>
        <Routes>
          <Route path='/Category' Component={Category}/>
          <Route path='/Product' Component={Product}/>
        </Routes>
      </div>
     </Router>
    </>
  )
}

export default App
