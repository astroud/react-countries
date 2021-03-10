import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  html {
    --color-darkmode-elements-background: hsl(209, 23%, 22%);
    --color-darkmode-background: hsl(207, 26%, 17%);
    --color-text: hsl(200, 15%, 8%);
    --color-text-input: hsl(0, 0%, 52%);
    --color-background: hsl(0, 0%, 98%);
    --color-darkmode-text: hsl(0, 0%, 100%);
    --color-elements-background: hsl(0, 0%, 100%);
    
    font-size: 87.5%;

    --side-padding: clamp(1rem, 5.5vw, 5rem)
  }

  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: 'Nunito Sans', sans-serif;
    transition: all 0.15s linear;
  }
`

export default GlobalStyle
