import { Link } from "gatsby"
import React from "react"
import logo from "../../images/Logo.svg"
import { HeaderStyle } from "./header.styles"
import Dropdown, { Option } from "./dropdown_button"

const Header = () => {
  return (
    <HeaderStyle>
      <div className="header-logo">
        <img src={logo}></img>
      </div>
      <div className="navigation">
        <nav>
          <div className="topnav"><Link to="#">Help</Link></div>

          <div className="App__content">
            <Dropdown onSelect={value => console.log(`Selected: ${value}`)}>
              <Option value="First">ENG</Option>
              <Option value="Second">RUS</Option>
            </Dropdown>
          </div>

        </nav>
      </div>
    </HeaderStyle>
  )
}

export default Header
