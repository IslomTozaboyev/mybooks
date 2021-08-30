import styled, { createGlobalStyle } from "styled-components";

export const lightTheme = {
  body: "#FFF",
  text: "#000",
};

export const darkTheme = {
  body: "#063246",
  text: "#fff",
};

export const GlobalStyles = createGlobalStyle`

  body{
    margin: 0;
    padding: 0;
    background-color: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
  }
  *{
    box-sizing: border-box;
  }

  .sidebar_link{
    color: ${({ theme }) => theme.text} !important;
  }

  a,
  a:hover {
    text-decoration: none;
    display: block;
    color: black;
  }
  ul{
    list-style-type: none;
    li{
      margin: 0;
      padding: 0;
    }
  }

  @media screen and (max-width: 990px) {
    .responsive_card{
      width: 100% !important;
    }
  }
`;
