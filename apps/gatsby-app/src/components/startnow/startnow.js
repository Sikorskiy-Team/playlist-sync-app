import React from "react"
import { Link } from "gatsby"

import {
  Startnow_style,
  Title_style,
  Subtitle_style,
  Startnow_button,
  Startnow_link,
} from "./startnow.styles"

const StartNow = () => {
  return (
    <div>
      <Startnow_style>
        <Title_style className="first-stroke">
          TRASFER YOUR PLAYLISTS AND
        </Title_style>
        <Title_style>FAVORITES</Title_style>
        <Subtitle_style className="second-stroke">
          Stop wasting your time transferring music data between
        </Subtitle_style>
        <Subtitle_style>
          different streaming platforms, let CubeMusic do the job!
        </Subtitle_style>
        <Startnow_button className="butto">
          <Startnow_link to="/app">START NOW</Startnow_link>
        </Startnow_button>
      </Startnow_style>
    </div>
  )
}

export default StartNow
