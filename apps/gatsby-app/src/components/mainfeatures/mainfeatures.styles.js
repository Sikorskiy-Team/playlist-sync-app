import styled from "styled-components"

const TitleStyle = styled.h1`
  width: 100%;

  font-family: Segoe UI;
  font-style: normal;
  font-weight: normal;
  font-size: 48px;
  line-height: 48px;
  text-align: center;

  color: #7a13cc;
`

const RectangleStyle = styled.div`
  width: 500px;
  height: 150px;

  border: 3px solid #7a13cc;
  box-sizing: border-box;
  border-radius: 56px;
  display: flex;

  .Image {
    margin-top: 25px;
    margin-left: 30px;
    margin-right: 15px;
    display: flex;
    height: 100px;
  }

  .Image > img {
    height: 100px;
  }
  .textBlock {
    margin-top: 25px;
    margin-left: 15px;
    display: flex;
  }
`
const MainFeaturesStyle = styled.div`
  display: flex;
  flex-direction: column; 
  margin: 0, auto; 
  justify-content: center; 
  width: 100%; 
  align-items: center; 

  .Title {
    display: flex;
    margin-bottom: 57.5px;
    
  }

  .firstRow{
    display:flex; 
    justify-content: center; 
  }

  .secondRow{
    display: flex; 
    justify-content: center; 
  }

  .Description1 {
    display: flex;
    margin-top: 57.5px;
    margin-bottom: 57.5px;
    margin-left: 20px;
    margin-right: 20px;
  }

  .Description2 {
    display: flex;
    margin-top: 57.5px;
    margin-bottom: 57.5px;
    margin-left: 20px;
    margin-right: 20px;
  }

  .Description3 {
    display: flex;
    margin-top: 57.5px;
    margin-bottom: 57.5px;
    margin-left: 20px;
    margin-right: 20px;
  }

  .Description4 {
    display: flex;
    margin-top: 57.5px;
    margin-bottom: 57.5px;
    margin-left: 20px;
    margin-right: 20px;
  }

  .Description5 {
    display: flex;
    margin-top: 57.5px;
    margin-bottom: 57.5px;
    margin-left: 20px;
    margin-right: 20px;
    width: fit-content; 
  }

  @media(max-width: 1080px){
    
  }
  background: #ffffff;
`

const TextStyle = styled.p`
  font-family: Segoe UI;
  font-style: normal;

  .BlockTitle {
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 5px;
  }

  .BlockText {
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

export {TitleStyle, RectangleStyle, MainFeaturesStyle, TextStyle, MainStyle}