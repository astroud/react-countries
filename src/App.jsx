import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { ThemeProvider } from 'styled-components'
import { Switch, Route } from 'react-router-dom'
import GlobalStyle from './components/GlobalStyles'
import { lightTheme, darkTheme } from './components/Themes'
import FilterableCountryList from './components/FilterableCountryList/FilterableCountryList'
import { useDarkMode, Navbar, SingleCountry } from './components'

const blankCountry = {
  currencies: [{ code: '', name: '', symbol: '' }],
  languages: [{
    iso639_1: '', iso639_2: '', name: '', nativeName: '',
  }],
  flag: '',
  name: '',
  topLevelDomain: [''],
  capital: '',
  region: '',
  subregion: '',
  population: 0,
  borders: [''],
  nativeName: '',
  numericCode: '',
}

function App() {
  const [theme, themeToggler] = useDarkMode()
  const themeMode = theme === 'light' ? lightTheme : darkTheme
  const [countries, setCountries] = useState([[blankCountry]])
  const [filteredCountries, setFilteredCountries] = useState([blankCountry])
  const fieldList = 'name;flag;population;region;capital;nativeName;subregion;topLevelDomain;currencies;languages;borders;numericCode'

  useEffect(() => {
    axios
      .get(`https://restcountries.eu/rest/v2/all?fields=${fieldList}`)
      .then((response) => {
        setCountries(response.data)
        setFilteredCountries(response.data)
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

        <Switch>
          <Route path="/:id">
            <SingleCountry
              countries={filteredCountries}
              themeToggler={themeToggler}
              theme={theme}
            />
          </Route>
          <Route path="/">
            <FilterableCountryList
              countries={filteredCountries}
              handleSearch={handleSearch}
            />
          </Route>
        </Switch>
      </div>
    </ThemeProvider>
  )
}

export default App
