import React from 'react'
import { Link } from 'react-router-dom'
function Sidebar() {
  return (
    <div>
        <ul className="sidebar">
          <li>
            <Link className="link" to="/Product">Product</Link>
          </li>
          <li>
            <Link className="link" to="/Category">category</Link>
          </li>
        </ul>
    </div>
  )
}

export default Sidebar
