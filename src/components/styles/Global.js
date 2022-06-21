import { createGlobalStyle } from "styled-components";



export const GlobalStyles = createGlobalStyle`
*{
    box-sizing: border-box;
}
body{
    background-color: ${({theme})=>theme.colors.body};
    color: hsl(192, 100%, 9%);
    font-size: 1.15rem;
    font-family: Georgia, 'Times New Roman', Times, serif;
    margin: 0;
}

p{
    opacity: 0.6;
    line-height: 1.5rem;
}
img{
    max-width: 100%;
}

`