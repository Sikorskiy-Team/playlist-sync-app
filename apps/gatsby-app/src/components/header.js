import { Link } from "gatsby"
import React from "react"

const Header = () => {
  return(
    <header>
    <div>
        <div className = "logo" >
          
        </div>
        <div>
          <Link to = "#">Help</Link>
          <Link to = "#">En</Link>
        </div>
    </div>
  </header>
  )
}


export default Header
