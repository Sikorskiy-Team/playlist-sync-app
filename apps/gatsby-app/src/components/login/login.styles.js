import styled from "styled-components"
import { Link } from "gatsby"

const Login_styles = styled.div`
  height: 1024px;
  width: 100%;
  background: #292929;
  display: flex;
  flex-direction: column;
  align-items: center;

  .logo-pic {
    margin-top: 281px;
    height: 57px;
    width: 117px;
  }
`

const Title_style = styled.h1`
  font-size: 48px;
  line-height: 48px;
  color: #ffffff;
  font-weight: 400;
  display: flex;
  margin-top: 57px;
`

const Button_style = styled.div`
  width: 449px;
  height: 104px;
  background: #7a13cc;
  border-radius: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 57px;
`

const Buttontext_style = styled(Link)`
  font-family: "Segoe UI";
  font-size: 30px;
  line-height: 20px;
  display: flex;
  align-items: center;
  text-align: center;
  text-decoration: none;
  color: white;

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

export { Login_styles, Title_style, Button_style, Buttontext_style }
