import styled from "styled-components"

const FooterStyle = styled.div`
  height: 400px; 
  width: 100%; 
  position: absolute;
  top: 3070px; 
  left: 0px; 

  display: flex; 
  flex-direction: column; 

  .menus{
    display: flex; 
    flex-direction: row; 
    justify-content: center; 
  }
  .wave{
    display: flex; 
  }

  .logo{
    display: flex; 
    margin-top: 0px; 
    margin-right: 36px; 
    
  }

  .logo > img{
    height: 56px;
    width: 118px; 
  }

  .socials{
    display: flex;
    flex-direction: column; 
    margin-left: 36px; 
    margin-right: 21px;
  }

  .company{
    display: flex; 
    flex-direction: column; 
    margin-left: 21px; 
    margin-right: 189px; 
  }

  .inst{
    display: flex;
    margin-left: 189px; 
    margin-right: 25px;
    width: 50px; 
    height: 50px;   
  }
  
  .inst > img {
    width: 50px; 
    height: 50px;
  }
  .fb{
    display: flex; 
    margin-left: 25px; 
    width: 50px; 
    height: 50px; 
  }

  .fb > img {
    width: 50px; 
    height: 50px;
  }
  
  @media(max-width: 1100px){
    .company{
    display: flex; 
    flex-direction: column; 
    margin-left: 21px; 
    margin-right: 100px; 
    }

    .inst{
    display: flex;
    margin-left: 100px; 
    margin-right: 25px;
    width: 50px; 
    height: 50px;   
    }
  }

  @media(max-width: 800px){
    .company{
    display: flex; 
    flex-direction: column; 
    margin-left: 21px; 
    margin-right: 50px; 
    }

    .inst{
    display: flex;
    margin-left: 50px; 
    margin-right: 25px;
    width: 50px; 
    height: 50px;   
    }
  }

  background: #292929; 
`
const MenuTitle = styled.p`
  font-family: Segoe UI;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 20px;
  display: flex;
  margin-bottom: 10px;  

  @media(max-width: 800px){
    font-size: 20px; 
  }
  color: #FFFFFF; 
`

const MenuItems = styled.a`
  font-family: Segoe UI;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 20px;
  display: flex; 
  margin-top: 10px; 
  margin-bottom: 10px;
  text-decoration: none; 

  :link{
    color: #FFFFFF; 
  }

  :focus{
    text-decoration: underline; 
  }

  :hover{
    text-decoration: underline;
  }

  @media(max-width: 800px){
    font-size: 20px; 
  }
  
  color: #FFFFFF; 
`
export {FooterStyle, MenuTitle, MenuItems}