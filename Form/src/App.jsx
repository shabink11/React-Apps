
import { BrowserRouter as Router     ,Route,Routes } from 'react-router-dom'

import Container from './components/Container'
import Signup from './components/Signup'
import Signin from './components/Signin'


function App() {
  

  return (
    <>
      <Router>
        <div  className='card'>
        <Container/>
        <div >
          <Routes>
            <Route path='/Signin' Component={Signin}/>
            <Route path='/Signup' Component={Signup}/>

          </Routes>
        </div>
        </div>
        
      </Router>
    </>
  )
}

export default App
