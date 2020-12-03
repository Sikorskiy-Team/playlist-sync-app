import React from "react"
import synchronize from "../../images/synchronize.png"
import platformtoplatform from "../../images/platform to platform.svg"
import importpic from "../../images/import.svg"
import exportpic from "../../images/export.svg"
import convertpic from "../../images/convert.svg"

import {TitleStyle, RectangleStyle, MainFeaturesStyle, TextStyle, MainStyle} from "./mainfeatures.styles"

const MainFeatures = () => {
  return (
    <MainStyle>
      <div className="main">
        <MainFeaturesStyle>
          <div className="Title">
            <TitleStyle>
              <h1>MAIN FEATURES</h1>
            </TitleStyle>
          </div>
          <div className="firstRow">
                <DescriptionRec
                  description="Automatically synchronization playlists between streaming services"
                  descriptiontitle="Synchronize"
                  picture={synchronize}
                  classname = "Description1"
                />
                <DescriptionRec
                  description="Just grab and move your entire music collection to another platform. Simply and easily!"
                  descriptiontitle="Platform to platform"
                  picture={platformtoplatform}
                  classname = "Description2"
                />
          </div>
          <div className="secondRow">
            <DescriptionRec
              description="Import M3U, XSPF, iTunes TXT, CSV, URL, Text Files ..."
              descriptiontitle="Import"
              picture={importpic}
              classname = "Description3"
            />
            <DescriptionRec
              description="Get tracklists of your playlists in CSV, XML, TXT formats ..."
              descriptiontitle="Export"
              picture={exportpic}
              classname="Description4"
            />
          </div>
            <DescriptionRec
              description="Transfer playlists, albums, artists or tracks between any streaming services."
              descriptiontitle="Convert"
              picture={convertpic}
              classname="Description5"
            />
        </MainFeaturesStyle>
      </div>
    </MainStyle>
  )
}

const DescriptionRec = ({ descriptiontitle, description, picture, classname }) => {
  return (
    <div className={classname}>
        <RectangleStyle>
          <div className="Image">
            <img src={picture} alt=""></img>
          </div>
          <div className="textBlock">
            <TextStyle>
              <p className="BlockTitle">{descriptiontitle}</p>
              <p className="BlockText">{description}</p>
            </TextStyle>
          </div>
        </RectangleStyle>
    </div>
  )
}

export default MainFeatures
