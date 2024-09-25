import React from "react";
import { Outlet, Link } from "react-router-dom";
import './Container.css'
import Sidebar from "../sidebar/Sidebar";

function Container() {
  return (
    <div>
    <div style={{ width: "100%" }}>
      <div >
        <ul className="nav1">
          <li>
            <Link className="link" to="/Home">home</Link>
          </li>
          <li>
            <Link className="link" to="/About">about</Link>
          </li>
          <li>
            <Link className="link" to="/Contact">contact</Link>
          </li>
        </ul>
      </div>
      </div>
      <div>
        <Sidebar/>
          <div >
        <Outlet />
      </div>
    </div>
    </div>
  
  );
}

export default Container;
