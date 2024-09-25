import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./Form.css";
function Container() {
  return (
    <div  >
      <div>
        <div>
          <ul>
            <li className="sign">
              <Link to="/Signin">
                <button>Signin</button>
              </Link>
            </li>
            <li className="sign">
              <Link to="/Signup">
                <button> Signup</button>
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Container;
