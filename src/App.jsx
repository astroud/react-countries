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
  const [filteredCountries, setFilteredCountries] = useState([])
  const fieldList = 'name;flag;population;region;capital;nativeName;subregion;topLevelDomain;currencies;languages;borders'

  useEffect(() => {
    axios
      .get(`https://restcountries.eu/rest/v2/all?fields=${fieldList}`)
      .then((response) => {
        setCountries(response.data)
      })
  }, [])

  const handleSearch = (event) => {
    const countryFilter = event.target.value.toLocaleLowerCase()
    const matchesTerm = (country) => (
      country.name.toLowerCase().includes(countryFilter)
    )

    setFilteredCountries(countries.filter(matchesTerm))
  }

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyle />
      <div className="App">
        <Navbar themeToggler={themeToggler} theme={theme} />
        <FilterableCountryList
          countries={filteredCountries}
          handleSearch={handleSearch}
        />
      </div>
    </ThemeProvider>
  )
}

export default App
