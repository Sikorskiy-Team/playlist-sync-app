import { Link } from '@wapps/gatsby-plugin-i18next';
import React from "react"
import logo from "../../images/Logo.svg"
import { HeaderStyle } from "./header.styles"
import LanguageSwitcher from "./lang_switcher"
import { withTranslation } from 'react-i18next';




const Header = ({t}) => {
  return (
    <div>
      <header>
        <HeaderStyle>
          <div className="header-logo">
            <img src={logo}></img>
          </div>
          <div className="navigation">
            <nav>
              <div className = "topnav"><Link to="#">{t('Help')}</Link></div>
                
              <div className="App__content">
                <LanguageSwitcher></LanguageSwitcher>
              </div>
          
            </nav>
          </div>
        </HeaderStyle>
      </header>
    </div>
  )
}

export default withTranslation()(Header)
