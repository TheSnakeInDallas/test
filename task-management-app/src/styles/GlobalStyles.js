import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  html, body {
    margin: 0;
    
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
	  font-family: 'Raleway', sans-serif;
    }
  }`;