import React from "react"
import synchronize from "../../images/synchronize.png"
import platformtoplatform from "../../images/platform to platform.svg"
import importpic from "../../images/import.svg"
import exportpic from "../../images/export.svg"
import convertpic from "../../images/convert.svg"
import { withTranslation } from 'react-i18next';


import {
  TitleStyle,
  RectangleStyle,
  MainFeaturesStyle,
  TextStyle,
  MainStyle,
} from "./mainfeatures.styles"

const MainFeatures = ({t}) => {
  return (
    <MainStyle>
      <div className="main">
        <MainFeaturesStyle>
          <div className="Title">
            <TitleStyle>{t('MAIN FEATURES')}</TitleStyle>
          </div>
          <div className="firstRow">
            <DescriptionRec
              description={t('Automatically synchronization playlists between streaming services')}
              descriptiontitle={t('Synchronize')}
              picture={synchronize}
              classname="Description1"
            />
            <DescriptionRec
              description={t('Just grab and move your entire music collection to another platform. Simply and easily!')}
              descriptiontitle={t('Platform to platform')}
              picture={platformtoplatform}
              classname="Description2"
            />
          </div>
          <div className="secondRow">
            <DescriptionRec
              description={t('Import M3U, XSPF, iTunes TXT, CSV, URL, Text Files ...')}
              descriptiontitle={t('Import')}
              picture={importpic}
              classname="Description3"
            />
            <DescriptionRec
              description={t('Get tracklists of your playlists in CSV, XML, TXT formats ...')}
              descriptiontitle={t('Export')}
              picture={exportpic}
              classname="Description4"
            />
          </div>
          <DescriptionRec
            description={t('Transfer playlists, albums, artists or tracks between any streaming services.')}
            descriptiontitle={t('Convert')}
            picture={convertpic}
            classname="Description5"
          />
        </MainFeaturesStyle>
      </div>
    </MainStyle>
  )
}

const DescriptionRec = ({
  descriptiontitle,
  description,
  picture,
  classname,
}) => {
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

export default withTranslation()(MainFeatures)
