import React from "react"
import { Link } from "gatsby"

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
            <MenuItems to="/">Contact us</MenuItems>
            <MenuItems to="/">Telegram bot</MenuItems>
          </div>
          <div className="company">
            <MenuTitle>Company</MenuTitle>
            <MenuItems to="/">About</MenuItems>
            <MenuItems to="/">Support</MenuItems>
            <MenuItems to="/">Privacy Policy</MenuItems>
          </div>
          <div className="socials-links">
            <div className="inst">
              <a href="http://www.instagram.com" target="_blank">
                <img src={instagram} alt="instagram" />
              </a>
            </div>
            <div className="fb">
              <a href="http://www.facebook.com" target="_blank">
                <img src={facebook} alt="facebook" />
              </a>
            </div>
          </div>
        </div>
      </FooterStyle>
    </div>
  )
}

export default Footer
