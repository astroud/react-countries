import React from 'react'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from './components/GlobalStyles'
import { lightTheme, darkTheme } from './components/Themes'
import { useDarkMode, Navbar } from './components'

function App() {
  const [theme, themeToggler] = useDarkMode()
  const themeMode = theme === 'light' ? lightTheme : darkTheme

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyle />
      <div className="App">
        <Navbar themeToggler={themeToggler} theme={theme} />
      </div>
    </ThemeProvider>
  )
}

export default App
