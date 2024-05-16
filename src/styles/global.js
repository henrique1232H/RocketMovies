import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Roboto Slab", serif;
    }

    button {
        cursor: pointer;
    }

    body {
        background: ${({theme}) => theme.COLOR.BACKGROUND};
    }

    :root {
        font-size: 62.5%;
    }

    ::-webkit-scrollbar {
        width: 10px;
    }


::-webkit-scrollbar-thumb {
  background: ${({theme}) => theme.COLOR.PINK}; 
  height: 10px;
  border-radius: 15px;
}

`