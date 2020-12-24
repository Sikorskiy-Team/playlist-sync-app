import styled from "styled-components"

const TitleStyle = styled.h1`
  width: 100%;

  font-family: Noto Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 48px;
  line-height: 48px;
  text-align: center;

  color: #7a13cc;

  @media (max-width: 1080px) {
    font-size: 46px;
  }

  @media (max-width: 768px) {
    font-size: 36px;
  }
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
    /* object-fit: cover; */
  }
  .textBlock {
    margin-top: 25px;
    margin-left: 15px;
    display: flex;
  }

  @media (max-width: 1080px) {
    height: 125px;
    width: 416px;

    border-radius: 42px;

    .Image > img {
      height: 60px;
      width: 60px;
    }

    .Image {
      margin-top: 25px;
      margin-left: 30px;
      margin-right: 15px;
      display: flex;
      height: 60px;
      width: 60px;
    }

    .textBlock {
      margin-top: 11px;
      /* margin-left: 37px; */
      display: flex;
    }
  }

  @media (max-width: 425px) {
    height: 100px;
    width: 333px;

    border-radius: 30px;

    .Image > img {
      height: 60px;
      width: 60px;
    }

    .Image {
      /*       margin-top: 25px;
      margin-left: 30px;
      margin-right: 15px; */
      display: flex;
      height: 60px;
      width: 60px;
    }

    .textBlock {
      /* margin-top: 11px; */
      margin-left: 20px;
      width: 185px;
      display: flex;
    }
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

  .firstRow {
    display: flex;
    justify-content: center;
  }

  .secondRow {
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

  @media (max-width: 1080px) {
    .firstRow {
      display: flex;
      flex-direction: column;
    }

    .secondRow {
      display: flex;
      flex-direction: column;
    }

    .Title {
      display: flex;
      margin-bottom: 20px;
    }

    .Description1 {
      display: flex;
      margin-top: 20px;
      margin-bottom: 20px;
      margin-left: 20px;
      margin-right: 20px;
    }

    .Description2 {
      display: flex;
      margin-top: 20px;
      margin-bottom: 20px;
      margin-left: 20px;
      margin-right: 20px;
    }

    .Description3 {
      display: flex;
      margin-top: 20px;
      margin-bottom: 20px;
      margin-left: 20px;
      margin-right: 20px;
    }

    .Description4 {
      display: flex;
      margin-top: 20px;
      margin-bottom: 20px;
      margin-left: 20px;
      margin-right: 20px;
    }

    .Description5 {
      display: flex;
      margin-top: 20px;
      margin-bottom: 20px;
      margin-left: 20px;
      margin-right: 20px;
      width: fit-content;
    }
  }
  background: #ffffff;
`

const TextStyle = styled.p`
  font-family: Noto Sans;
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

  @media (max-width: 1080px) {
    .BlockTitle {
      font-size: 20px;
      font-weight: 700;
    }

    .BlockText {
      font-size: 14px;
      color: #575757;
    }
  }

  @media (max-width: 425px) {
    .BlockTitle {
      margin-top: 0px;
      font-size: 18px;
      font-weight: 700;
    }

    .BlockText {
      font-size: 12px;
      color: #575757;
      width: 185px;
      line-height: 18px;
    }
  }
`

const MainStyle = styled.div`
  width: 100%;
  position: absolute;
  top: 1073px;
  height: 1024px;
  left: 0px;
`

export { TitleStyle, RectangleStyle, MainFeaturesStyle, TextStyle, MainStyle }
