import React from "react"
import styled from "styled-components"
import synchronize from "../images/synchronize.png"

const TitleStyle = styled.h1`
  width: 100%; 

  font-family: Segoe UI;
  font-style: normal;
  font-weight: normal;
  font-size: 48px;
  line-height: 48px;
  text-align: center;

  color: #7A13CC;
`

const RectangleStyle = styled.div`
  width: 500px;
  height: 150px;


  border: 3px solid #7A13CC;
  box-sizing: border-box;
  border-radius: 56px;

  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 2fr; 
  grid-template-areas: 
  "i t"
  "i t";
  grid-column-gap: 30px;

  .Image{
    padding-top: 25px;
    padding-left: 20px;
    grid-area: i;
    height: 100px;

  }

  .textBlock{
    padding-top: 25px;
    grid-area: t;
  }
`
const MainFeaturesStyle = styled.div`
  width: 54,2%;
  padding-left: 21%;
  display: grid; 
  position: absolute;
  grid-template-rows: 48px repeat(3, 150px);
  grid-template-columns: 1fr 1fr;
  grid-row-gap: 115px;
  grid-column-gap: 40px;
  grid-template-areas:
  "Title Title"
  "Description1 Description2"
  "Description3 Description4"
  "Description5 Description5";
  
  .Title{
    grid-area: Title;
  }

  .Description1{
    grid-area: Description1;
  }

  .Description2{
    grid-area: Description2;
  }

  .Description3{
    grid-area: Description3;
  }

  .Description4{
    grid-area: Description4;
  }

  .Description5{
    padding-left: 270px; 
    grid-area: Description5;
  }

  background: #FFFFFF;
`

const TextStyle = styled.p`
  font-family: Segoe UI;
  font-style: normal;


  .BlockTitle{
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 5px; 
  }

  .BlockText{
    font-size: 18px; 
    color: #575757; 
    width: 286px;
  }
`

const MainStyle = styled.div`
  width: 100%;
  position: absolute; 
  top: 1124px; 
  height: 1024px;
  left: 0px;
`
const MainFeatures = () => {
  return(
    <MainStyle>
    <div className = "main">
        <MainFeaturesStyle>
        <div className = "Title">
          <TitleStyle>
            <h1>MAIN FEATURES</h1>
          </TitleStyle>
        </div>
        <div className="Description1">
        <DescriptionRec description="жопа"/>
        </div>
        <div className = "Description2">
        <DescriptionRec />
        </div>
        <div className = "Description3">
        <DescriptionRec />
        </div>
        <div className = "Description4">
        <DescriptionRec />
        </div>
        <div className = "Description5">
        <DescriptionRec />
        </div>
        </MainFeaturesStyle>
    </div>
    </MainStyle>
  )
}

const DescriptionRec = ({description}) => {
  return (
    <div className = "Description">
          <div>
          <RectangleStyle>
              <div className = "Image"> 
                <img src ={synchronize} alt = ''></img>
              </div>
              <div className = "textBlock">
              <TextStyle>
                <p className = "BlockTitle">Synchronize</p>
                <p className = "BlockText">{description}</p>
              </TextStyle>
              </div>
          </RectangleStyle>
          </div>
    </div>
  )
}

export default MainFeatures