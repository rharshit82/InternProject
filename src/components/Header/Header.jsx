import React, { useState } from "react"
import "./Header.css"
import { Link} from "react-router-dom"
import {ReactComponent as Logo} from './logo.svg'
const Header = () => {
  const [navList, setNavList] = useState(false)
  return (
    <>
        <div className="container flex">
          <div className="logo">
            <h1>
              <Logo style={{height: "1.2rem", width: "1.2rem"}}/>
              <Link to={"/"}>TTT Assignment</Link>
            </h1>
          </div>
          </div>
        
    </>
  );
}

export default Header
