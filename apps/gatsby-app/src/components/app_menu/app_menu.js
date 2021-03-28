import React from "react"

import prof from "../../images/profile.png"
import set_icon from "../../images/Settings_icon.png"
import transfer from "../../images/transfer.png"
import platformto from "../../images/platform to platform.svg"
import synchronize from "../../images/sync_icon.png"

import {
  Menu_style,
  Profile_style,
  Profile_picture,
  Text_style,
  Settings_button,
  Features_buttons,
  ButtonText_style,
  Your_Library,
  LibraryHeader_Style,
  LibraryButtons_Style,
  LibraryText_Style,
} from "./app_menu.styles"

const App_menu = ({user}) => {
  console.log(user)
  return (
    <div>
      <Menu_style>
        <Profile_style>
          <Profile_picture>
            <img src={prof} alt="" className="prof-pic"></img>
          </Profile_picture>
          <Text_style>{user.name}</Text_style>
          <Settings_button>
            <img src={set_icon} alt=""></img>
          </Settings_button>
        </Profile_style>
        <Features_buttons className="transfer">
          <img src={transfer} alt=""></img>
          <ButtonText_style>Передать</ButtonText_style>
        </Features_buttons>
        <Features_buttons className="platform-to-platform">
          <img src={platformto} alt=""></img>
          <ButtonText_style>Платформа на платформу</ButtonText_style>
        </Features_buttons>
        <Features_buttons className="synchronize">
          <img src={synchronize} alt=""></img>
          <ButtonText_style>Синхронизация</ButtonText_style>
        </Features_buttons>
        <Your_Library>
          <LibraryHeader_Style>Ваша библиотека</LibraryHeader_Style>
          <LibraryButtons_Style>
            <div className="left-color"></div>
            <LibraryText_Style>Плейлисты</LibraryText_Style>
          </LibraryButtons_Style>
          <LibraryButtons_Style>
            <div className="left-color"></div>
            <LibraryText_Style>Треки</LibraryText_Style>
          </LibraryButtons_Style>
        </Your_Library>
      </Menu_style>
    </div>
  )
}

export default App_menu
