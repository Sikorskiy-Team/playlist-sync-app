import React from "react"


import wave from "../../images/wave.png"
import youtube from "../../images/Youtube Music.png"
import spotify from "../../images/Spotify.png"
import deezer from "../../images/Deezer.png"

import {TitleStyle, ServicesPosition, WaveStyle, Morestyle, Pos, Socialsstyle} from "./services.styles"

const Services = () => {
  return (
    <div className="Services">
      <ServicesPosition>
        <div className="wave-picture">
          <img src={wave} alt=""></img>
        </div>
        <Pos>
          <div className="Title">
            <TitleStyle>SERVICES WE SUPPORT</TitleStyle>
          </div>
          <div className="row">
            <Socials picture={youtube} classname="you-tube-music" />
            <Socials picture={spotify} classname="spotify" />
            <Socials picture={deezer} classname="deezer" />
          </div>
          <div className="more">
            <Morestyle>MORE SERVICES COMING SOON</Morestyle>
          </div>
        </Pos>
      </ServicesPosition>
    </div>
  )
}

const Socials = ({ picture, classname }) => {
  return (
    <div>
      <div className={classname}>
        <Socialsstyle>
          <img src={picture} className="pic" id={classname}></img>
        </Socialsstyle>
      </div>
    </div>
  )
}

export default Services
