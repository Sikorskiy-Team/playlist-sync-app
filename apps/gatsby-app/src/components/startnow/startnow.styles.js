import styled from "styled-components"
import { Link } from "gatsby"

// import Backgr from "../../images/Background.png"

const Startnow_style = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 100px;
  left: 0px;
  width: 100%;
  background: url("./static/Background.png");
  background-size: cover;
  height: 974px;
  align-items: center;

  .first-stroke {
    margin-top: 200px;
  }

  .second-stroke {
    margin-top: 57px;
  }

  .butto {
    margin-top: 25px;
  }
`
const Title_style = styled.h1`
  display: flex;
  font-family: "Segoe UI";
  font-size: 48px;
  font-weight: 400;
  line-height: 48px;
  text-align: center;
  color: #ffffff;
`

const Subtitle_style = styled.h2`
  display: flex;
  font-family: "Segoe UI";
  font-size: 28px;
  font-weight: 400;
  line-height: 28px;
  color: #ffffff;
  text-align: center;
`

const Startnow_button = styled.div`
  display: flex;
  height: 100px;
  width: 440px;
  border-radius: 50px;
  background-color: #7a13cc;
  flex-direction: row;
  justify-content: center;
`

const Startnow_link = styled(Link)`
  font-family: "Segoe UI";
  font-size: 48px;
  line-height: 48px;
  display: flex;
  align-items: center;
  text-align: center;
  text-decoration: none;

  :link {
    color: #ffffff;
  }

  :focus {
    text-decoration: none;
  }

  :hover {
    text-decoration: none;
  }

  :visited {
    color: #ffffff;
  }
`

export {
  Startnow_style,
  Title_style,
  Subtitle_style,
  Startnow_button,
  Startnow_link,
}
