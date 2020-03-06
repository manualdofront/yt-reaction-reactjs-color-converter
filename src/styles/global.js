import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
  }

  html {
    min-height: 100%;
  }

  body, #root {
    background: #606c88;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #3f4c6b, #606c88);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #3f4c6b, #606c88); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    
    color: #999;
    font-family: 'Montserrat', sans-serif;
  }

  button {
    cursor: pointer;
  }

  /* ---=== CUSTOM === --- */
  .text-center {
    text-align: center;
  }

  .border-red {
    border: 1px solid red;
  }

  .border-green {
    border: 1px solid green;
  }

  .border-blue {
    border: 1px solid blue;
  }

  a {
    text-decoration: none;
    color: #555;
  }
`;