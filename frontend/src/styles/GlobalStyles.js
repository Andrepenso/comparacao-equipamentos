import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, sans-serif;
  }

  body {
    background-color: #f4f4f4;
    color: #333;
    padding: 20px;
  }

  h1, h2 {
    color: #444;
  }

  select {
    padding: 8px;
    margin: 10px 0;
    font-size: 16px;
  }

  nav {
    background: #007bff;
    padding: 10px;
    border-radius: 5px;
    text-align: center;
  }

  nav a {
    color: white;
    text-decoration: none;
    margin: 0 15px;
    font-weight: bold;
  }

  nav a:hover {
    text-decoration: underline;
  }
`;

export default GlobalStyle;
