import React from "react"

import wave from "../../images/wave.png"
import youtube from "../../images/Youtube Music.png"
import spotify from "../../images/Spotify.png"
import deezer from "../../images/Deezer.png"
import { withTranslation } from 'react-i18next'



import {
  TitleStyle,
  ServicesPosition,
  WaveStyle,
  Morestyle,
  Pos,
  Socialsstyle,
} from "./services.styles"

const Services = ({t}) => {
  return (
    <div className="Services">
      <ServicesPosition>
        <div className="wave-picture">
          <img src={wave} alt=""></img>
        </div>
        <Pos>
          <div className="title">
            <TitleStyle>{t('SERVICES WE SUPPORT')}</TitleStyle>
          </div>
          <div className="row">
            <Socials
              picture={youtube}
              classname="row__item"
              id="you-tube-music"
            />
            <Socials picture={spotify} classname="row__item" id="spotify" />
            <Socials picture={deezer} classname="row__item" id="deezer" />
          </div>
          <div className="more">
            <Morestyle>{t('MORE SERVICES COMING SOON')}</Morestyle>
          </div>
        </Pos>
      </ServicesPosition>
    </div>
  )
}

const Socials = ({ picture, classname, id }) => {
  return (
    <div>
      <div className={classname}>
        <Socialsstyle>
          <img src={picture} className="pic" id={id}></img>
        </Socialsstyle>
      </div>
    </div>
  )
}

export default withTranslation()(Services)
