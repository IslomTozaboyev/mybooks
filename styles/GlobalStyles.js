import styled, { createGlobalStyle } from "styled-components";
const Montserrat = `'Montserrat', sans-serif`;

export const lightTheme = {
  body: "#FFF",
  text: "#000",
  shadow: "rgba(0, 0, 0, 0.2)",
  link: "rgba(110, 110, 110)",
};

export const darkTheme = {
  body: "#063246",
  text: "#fff",
  shadow: "rgb(177, 177, 177)",
  link: "rgb(192, 188, 188)",
};

export const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;500;700;900&display=swap');

  body{
    margin: 0;
    padding: 0;
    background-color: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: ${Montserrat};

       /* width */
    ::-webkit-scrollbar {
      width: 10px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
      background: #ccc;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
      background: #888;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
      background: #555;
    }
  }
  *{
    box-sizing: border-box;
  }

  .sidebar_link, .text{
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

  #nprogress{
  height: 100vh !important;
  .spinner{
    top:0;
    right: 0;
    width: 100% !important;
    height: 100vh !important;
    display:flex;
    justify-content:center;
    align-items:center;
    background-color: #33333333;
    .spinner-icon{
      width: 60px !important;
      height: 60px !important;
    }
  }
}

.input {
      padding: 8px 0;
      outline: none;
      border: none;
      box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
      border-radius: 10px;
      &::placeholder {
        color: rgb(165, 165, 165) !important;
      }
    }
`;
