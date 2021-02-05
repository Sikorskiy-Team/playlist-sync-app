import styled from "styled-components"
import { Link } from "gatsby"

const FooterStyle = styled.div`
  height: 400px;
  width: 100%;
  position: absolute;
  top: 3070px;
  left: 0px;

  display: flex;
  flex-direction: column;

  .menus {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  .wave {
    display: flex;
  }

  .logo {
    display: flex;
    margin-top: 0px;
    margin-right: 36px;
  }

  .logo > img {
    height: 56px;
    width: 118px;
  }

  .socials {
    display: flex;
    flex-direction: column;
    margin-left: 36px;
    margin-right: 21px;
  }

  .socials-links {
    display: flex;
    direction: row;
  }

  .company {
    display: flex;
    flex-direction: column;
    margin-left: 21px;
    margin-right: 189px;
  }

  .inst {
    display: flex;
    margin-left: 189px;
    margin-right: 25px;
    width: 50px;
    height: 50px;
  }

  .inst > a > img {
    width: 50px;
    height: 50px;
  }
  .fb {
    display: flex;
    margin-left: 25px;
    width: 50px;
    height: 50px;
  }

  .fb > a > img {
    width: 50px;
    height: 50px;
  }

  @media (max-width: 1100px) {
    .company {
      display: flex;
      flex-direction: column;
      margin-left: 21px;
      margin-right: 100px;
    }

    .inst {
      display: flex;
      margin-left: 100px;
      margin-right: 25px;
      width: 50px;
      height: 50px;
    }
  }

  @media (max-width: 800px) {
    .company {
      display: flex;
      flex-direction: column;
      margin-left: 21px;
      margin-right: 50px;
    }

    .inst {
      display: flex;
      margin-left: 50px;
      margin-right: 25px;
      width: 50px;
      height: 50px;
    }
  }

  @media (max-width: 600px) {
    height: 715px;

    .menus {
      margin-top: 80px;
      flex-direction: column;
      align-items: center;
    }

    .logo {
      margin-right: 0px;
      width: 118px;
      margin-bottom: 32px;
    }

    .socials {
      margin-left: 0px;
      margin-right: 0px;
      margin-top: 32px;
      margin-bottom: 24px;
      align-items: center;
      width: 120px;
    }

    .company {
      display: flex;
      flex-direction: column;
      margin-left: 0px;
      margin-right: 0px;
      margin-top: 24px;
      margin-bottom: 30px;
      align-items: center;
      width: 120px;
    }

    .socials-links {
      display: flex;
      direction: row;
      margin-top: 30px;
    }

    .inst {
      display: flex;
      margin-left: 0px;
      margin-right: 25px;
      width: 50px;
      height: 50px;
    }

    .fb {
      display: flex;
      margin-left: 25px;
      margin-right: 0px;
      width: 50px;
      height: 50px;
    }

    .inst > a > img {
      width: 50px;
      height: 50px;
    }

    .fb > a > img {
      width: 50px;
      height: 50px;
    }
  }

  background: #292929;
`
const MenuTitle = styled.p`
  font-family: Noto Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 20px;
  display: flex;

  @media (max-width: 800px) {
    font-size: 20px;
  }

  @media (max-width: 600px) {
    text-align: center;
    line-height: 20px;
    text-align: center;
  }
  color: #ffffff;
`

const MenuItems = styled(Link)`
  font-family: Noto Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 20px;
  display: flex;
  margin-top: 10px;
  text-decoration: none;

  :link {
    color: #ffffff;
  }

  :focus {
    text-decoration: underline;
  }

  :hover {
    text-decoration: underline;
  }

  :visited {
    color: #ffffff;
  }

  @media (max-width: 800px) {
    font-size: 20px;
  }

  @media (max-width: 600px) {
    text-align: center;
    line-height: 20px;
    text-align: center;
  }

  color: #ffffff;
`
export { FooterStyle, MenuTitle, MenuItems }
