import React from 'react'
import { Outlet,Link } from 'react-router-dom'

function Container() {
  return (
    
    <div >
        <div >
      <ul>
        <li><Link to ="/home">home</Link></li>
        <li><Link to ="/about">about</Link></li>
        <li><Link to="/contact">contact</Link></li>
      </ul>
      </div>
      <div style={{width:'100%',}}>
        <Outlet/>
        </div>
      
    </div>
  )
}

export default Container
