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
  const [regionFilter, setRegionFilter] = useState('')
  const [countryFilter, setCountryFilter] = useState('')

  useEffect(() => {
    const fieldList = 'name;flag;population;region;capital;nativeName;subregion;topLevelDomain;currencies;languages;borders;numericCode;alpha3Code'
    axios
      .get(`https://restcountries.eu/rest/v2/all?fields=${fieldList}`)
      .then((response) => {
        setCountries(response.data)
        setFilteredCountries(response.data)
      })
  }, [])

  useEffect(() => {
    if (countries.length > 1) {
      const matchesTerm = (country) => (
        country.name.toLowerCase().includes(countryFilter)
      )

      if (regionFilter === '') {
        setFilteredCountries(countries.filter(matchesTerm))
      } else {
        setFilteredCountries(
          countries.filter((country) => country.region === regionFilter).filter(matchesTerm),
        )
      }
    }
  }, [countries, countryFilter, regionFilter])

  const handleSearch = (event) => {
    setCountryFilter(event.target.value.toLocaleLowerCase())
  }

  const handleRegionFilter = (e) => {
    setRegionFilter(e.target.getAttribute('id'))
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
              handleRegionFilter={handleRegionFilter}
              regionFilter={regionFilter}
            />
          </Route>
        </Switch>
      </div>
    </ThemeProvider>
  )
}

export default App
