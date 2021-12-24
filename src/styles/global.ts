import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif; 
    font-size: 18px;
  }
  
  .wrapper{
    display: flex;
    flex-direction: column;
  }

  a{
    text-decoration: none;
  }

`