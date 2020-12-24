import React from "react"
import { Link } from '@wapps/gatsby-plugin-i18next'

import wave from "../../images/wave2.png"
import logo from "../../images/Logofoot.png"
import instagram from "../../images/Instagram.png"
import facebook from "../../images/Facebook.png"

import { withTranslation } from 'react-i18next';


import { FooterStyle, MenuTitle, MenuItems } from "./footer.styles"

const Footer = ({t}) => {
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
            <MenuItems to="/">{t('Contact us')}</MenuItems>
            <MenuItems to="/">{t('Telegram bot')}</MenuItems>
          </div>
          <div className="company">
            <MenuTitle>Company</MenuTitle>
            <MenuItems to="/">{t('About')}</MenuItems>
            <MenuItems to="/">{t('Support')}</MenuItems>
            <MenuItems to="/">{t('Privacy Policy')}</MenuItems>
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

export default withTranslation()(Footer)
