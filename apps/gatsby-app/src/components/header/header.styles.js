import styled from "styled-components"

const HeaderStyle = styled.header`
  height: 100px;
  background: #292929;
  color: #292929;
  display: flex;
  width: 100%;
  text-decoration: none;
  flex-direction: row;
  justify-content:space-between;
  font-family: 'Roboto', sans-serif;
  


  .nav{
    text-align: center;
    display:flex;
    justify-content:center;
    flex-direction:row;
  }

  .li{
    display:block;
    float:left;
    position:relative;
  }

 

  .navigation {
    display: flex;
    margin-right:100px;
    margin-top:40px;
  }

  .navig{
    margin-right:35px;  
    margin-left:35px;
    text-decoration:none;
    
  }



  .header-logo {
    display: flex;
    margin-top:10px;
    margin-left:100px;
  }

  .header-logo>img{
    height:100px;
    width:150px;

  }


  .nav{
    display:flex;
    flex-direction:row;
    justify-content:center;
    width: 100%;
  }

  



`

export { HeaderStyle }
