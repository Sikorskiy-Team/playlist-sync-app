import React from "react"

import wave from "../../images/wave2.png"
import logo from "../../images/Logofoot.png"
import instagram from "../../images/Instagram.png"
import facebook from "../../images/Facebook.png"

import { FooterStyle, MenuTitle, MenuItems } from "./footer.styles"

const Footer = () => {
  return (
    <div>
      <FooterStyle>
        <div className="wave">
          <img src={wave} alt="" />
        </div>
        <div className="menus">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
          <div className="socials">
            <MenuTitle>Socials</MenuTitle>
            <MenuItems href="">Contact us</MenuItems>
            <MenuItems href="">Telegram bot</MenuItems>
          </div>
          <div className="company">
            <MenuTitle>Company</MenuTitle>
            <MenuItems href="">About</MenuItems>
            <MenuItems href="">Support</MenuItems>
            <MenuItems href="">Privacy Policy</MenuItems>
          </div>
          <div className="inst">
            <a href="http://www.instagram.com">
              <img src={instagram} alt="instagram" />
            </a>
          </div>
          <div className="fb">
            <a href="http://www.facebook.com">
              <img src={facebook} alt="facebook" />
            </a>
          </div>
        </div>
      </FooterStyle>
    </div>
  )
}

export default Footer
