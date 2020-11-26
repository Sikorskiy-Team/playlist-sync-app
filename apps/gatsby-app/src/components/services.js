import React from "react"
import styled from "styled-components"

import wave from "../images/wave.png"
import youtube from "../images/YoutubeMusic.png"
import spotify from "../images/Spotify.png"
import deezer from "../images/Deezer.png"

const TitleStyle = styled.h1`
  position: relative;
  width: 100%; 
  top: 151px;

  font-family: Segoe UI;
  font-style: normal;
  font-weight: normal;
  font-size: 48px;
  line-height: 48px;
  text-align: center;

  color: #FFFFFF;
`
const ServicesPosition = styled.div`
  position: absolute; 
  top: 2048px; 
  height: 1024px;
  width: 100%;
  left: 0px;

  background: #575757; 
`
const WaveStyle = styled.div` 
  width: 1920px;
`

const socialsStyle = styled.div`
  width: 277px; 
  height: 138px; 
  background: #FFFFFF; 
  border-radius: 56px;

  display: grid; 

  grid-template-columns: 1fr;
  grid-template-rows: 1fr; 
  grid-template-areas: "pic"; 

  .logo-pic{
    grid-area: pic; 
  }
`

const Services = () => {
  return (
    
    <div className = "Services">
      <ServicesPosition>
      <div className = "wave-picture">
        <img src = {wave} alt =''></img>
      </div>
      <div className = "Title">
        <TitleStyle>
        <h1>SERVICES WE SUPPORT</h1>
        </TitleStyle>
      </div>
      <socialsStyle>
      <div className = "YouTube-Music">
      
        <img src = {youtube} alt ='' className = "logo-pic"></img>
        
      </div>
      </socialsStyle>
      <socialsStyle>
      <div className = "Spotify">
        <img src = {spotify} alt ='' className = "logo-pic"></img>
      </div>
      </socialsStyle>
      <socialsStyle>
      <div className = "Deezer">
        <img src = {deezer} alt ='' className = "logo-pic"></img>
      </div>
      </socialsStyle>
      </ServicesPosition>
    </div>
  )
}

export default Services; 