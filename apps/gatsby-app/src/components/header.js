import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import logo from "../images/Logo.svg"

const HeaderStyle = styled.header`
  position: absolute;
  height: 100px;
  width: 100%;
  background: #292929;
  display: grid;

  .header-logo {
    grid-area: logo;
  }

  .navigation {
    grid-area: navi;
    float: left;
  }

  .profile-button {
    grid-area: butto;
  }
  grid-template-rows: 100px;
  grid-template-columns: 2fr 14fr 2fr;

  grid-template-areas: "logo navi butto";
`

const MainStyle = styled.div`
  width: 100%;
  background: #292929;
  color: #ffffff;
`

const Header = () => {
  return (
    <div>
      <MainStyle>
        <header className="head">
          <div>
            <HeaderStyle>
              <div className="header-logo">
                <img src={logo}></img>
              </div>
              <div className="navigation">
                <nav>
                  <Link to="#">Help</Link>
                  <Link to="#">Lang</Link>
                </nav>
              </div>
              <div className="profile-button">
                <a href="#">Profile</a>
              </div>
            </HeaderStyle>
          </div>
        </header>
      </MainStyle>
    </div>
  )
}

export default Header
