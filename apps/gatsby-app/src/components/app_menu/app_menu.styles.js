import styled from "styled-components"

const Menu_style = styled.div`
  position: absolute;
  left: 0px;
  top: 100px;
  width: 400px;
  height: 924px;
  border-right-width: 10px solid;
  border-right-color: #1f1f1f;
  background: #292929;
  display: flex;
  flex-direction: column;
`

const Profile_style = styled.div`
  display: flex;
  left: 0px;
  width: 400px;
  height: 97px;
  border-top: 2px solid;
  border-top-color: #1f1f1f;
  border-bottom: 2px solid;
  border-bottom-color: #1f1f1f;
  background: #292929;
  flex-direction: row;
`

const Profile_picture = styled.div`
  display: flex;
  margin-top: 26px;
  margin-left: 59px;
  margin-bottom: 24px;
  margin-right: 11px;
  height: 50px;
  width: 50px;
  .prof-pic {
    width: 50px;
    height: 50px;
    border: 2px solid white;
    border-radius: 25px;
  }
`

const Text_style = styled.p`
  display: flex;
  font-size: 18px;
  line-height: 19px;
  color: white;
  font-family: "Segoe UI";
  font-weight: 500;
  margin-top: 41px;
  margin-bottom: 41px;
  margin-right: 43px;
`

const Settings_button = styled.button`
  display: flex;
  width: 50px;
  height: 50px;
  background: #292929;
  border: 2px solid #1f1f1f;
  border-radius: 11px;
  margin-top: 25px;
  margin-right: 40px;
  margin-bottom: 25px;
  flex-direction: row;
  justify-content: center;
  img {
    margin-top: 8px;
  }

  :hover {
    background: #7a13cc;
  }
`
const ButtonText_style = styled.p`
  display: flex;
  font-size: 18px;
  line-height: 19px;
  color: white;
  font-family: "Segoe UI";
  font-weight: 500;
  margin-top: 31px;
  margin-bottom: 41px;
`

const Features_buttons = styled.button`
  width: 360px;
  height: 80px;
  margin-top: 10px;
  margin-left: 20px;
  margin-bottom: 10px;
  background: #292929;
  display: flex;
  flex-direction: row;
  border-radius: 20px;
  outline: none;
  img {
    height: 50px;
    width: 50px;
    margin-top: 17px;
    margin-left: 39px;
    margin-right: 12px;
  }
  border: none;

  :hover {
    background: #575757;
  }
`

const Your_Library = styled.div`
  height: 249px;
  width: 400px;
  border-top: 2px solid;
  border-top-color: #1f1f1f;
  border-bottom: 2px solid;
  border-bottom-color: #1f1f1f;
  display: flex;
  flex-direction: column;
`
const LibraryHeader_Style = styled.p`
  display: flex;
  font-size: 18px;
  line-height: 19px;
  color: white;
  font-family: "Segoe UI";
  font-weight: 500;
  margin-top: 38px;
  margin-bottom: 23px;
  justify-content: center;
`
const LibraryButtons_Style = styled.button`
  display: flex;
  flex-direction: row;
  height: 84px;
  width: 400px;
  background: #292929;
  margin-left: 0px;
  padding: 0px;
  outline: none;

  .left-color {
    display: flex;
    background: #292929;
    width: 10px;
    height: 84px;
    margin-left: 0px;
  }

  :hover {
    background: #575757;
    .left-color {
      background: #7a13cc;
      opacity: 50%;
    }
  }

  :focus {
    background: #353535;
    color: none;

    .left-color {
      background: #7a13cc;
    }

    border: none;
  }
  border: none;
`
const LibraryText_Style = styled.p`
  display: flex;
  font-size: 18px;
  line-height: 19px;
  color: white;
  font-family: "Segoe UI";
  font-weight: 500;
  margin-top: 35px;
  margin-bottom: 35px;
  margin-left: 45px;
`

export {
  Menu_style,
  Profile_style,
  Profile_picture,
  Text_style,
  Settings_button,
  Features_buttons,
  ButtonText_style,
  Your_Library,
  LibraryHeader_Style,
  LibraryButtons_Style,
  LibraryText_Style,
}
