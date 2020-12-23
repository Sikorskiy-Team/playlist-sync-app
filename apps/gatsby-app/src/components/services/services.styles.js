import styled from "styled-components"

const TitleStyle = styled.h1`
  width: 100%;

  font-family: Noto Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 48px;
  line-height: 48px;
  text-align: center;

  @media (max-width: 1024px) {
    font-size: 46px;
  }

  @media (max-width: 426px) {
    font-size: 24px;
  }

  @media (max-width: 768px) {
    font-size: 36px;
  }

  color: #ffffff;
`
const ServicesPosition = styled.div`
  position: absolute;
  top: 2047px;
  height: 1024px;
  width: 100%;
  left: 0px;

  background: #575757;
`
const WaveStyle = styled.div`
  width: 100%;
`
const Morestyle = styled.h1`
  position: relative;
  width: 100%;

  font-family: Noto Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 48px;
  line-height: 48px;
  text-align: center;

  @media (max-width: 1024px) {
    font-size: 46px;
  }

  @media (max-width: 426px) {
    font-size: 24px;
    max-width: 400px;
  }

  @media (max-width: 768px) {
    font-size: 36px;
  }

  color: #ffffff;
`
const Pos = styled.div`
  position: relative;
  top: 208px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .row {
    display: flex;
    flex-direction: row;
  }

  .row__item {
    display: flex;
    margin-top: 49.5px;
    margin-bottom: 49.5px;
    margin-right: 38px;
    margin-left: 38px;
  }

  .title {
    display: flex;
    margin-bottom: 49.5px;
  }

  .more {
    display: flex;
    margin-top: 49.5px;
  }

  @media (max-width: 988px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    top: 100px;

    .row {
      display: flex;
      flex-direction: column;
    }

    .row__item {
      display: flex;
      margin-top: 20px;
      margin-bottom: 20px;
    }

    .title {
      display: flex;
      margin-bottom: 20px;
    }

    .more {
      display: flex;
      margin-top: 20px;
    }
  }
`

const Socialsstyle = styled.div`
  width: 277px;
  height: 138px;
  background-color: #ffffff;
  border-radius: 56px;

  .pic {
    margin: 0, auto;
  }

  #you-tube-music {
    margin-top: 42px;
    margin-left: 40px;
    margin-bottom: 48px;
    margin-right: 40px;
  }

  #spotify {
    margin-left: 36px;
    margin-top: 35px;
    margin-bottom: 40px;
    margin-right: 33px;
  }

  #deezer {
    margin-left: 10px;
    margin-top: 42px;
    margin-bottom: 48px;
    margin-right: 17px;
  }
`

export { TitleStyle, ServicesPosition, WaveStyle, Morestyle, Pos, Socialsstyle }
