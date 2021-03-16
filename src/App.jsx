import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from './components/GlobalStyles'
import { lightTheme, darkTheme } from './components/Themes'
import FilterableCountryList from './components/FilterableCountryList/FilterableCountryList'
import { useDarkMode, Navbar } from './components'

function App() {
  const [theme, themeToggler] = useDarkMode()
  const themeMode = theme === 'light' ? lightTheme : darkTheme
  const [countries, setCountries] = useState([])

  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then((response) => {
        setCountries(response.data)
      })
  }, [])

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyle />
      <div className="App">
        <Navbar themeToggler={themeToggler} theme={theme} />
        <FilterableCountryList countries={countries} />
      </div>
    </ThemeProvider>
  )
}

export default App
