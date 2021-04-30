import React from 'react'
import PropTypes from 'prop-types'
import { useParams } from 'react-router-dom'
import { BackButton, CountryLink } from '../index'
import {
  CountryWrapper, Wrapper, Flag, DetailsWrapper, Details, Detail, Label,
  CountryName, BorderCountriesLabel,
} from './SingleCountry.elements'

const lookupName = (codes, countriesArray) => {
  const borderingCountries = countriesArray.filter((c) => codes.includes(c.alpha3Code))
  return borderingCountries.map((c) => ({ name: c.name, id: c.numericCode }))
}

const SingleCountry = ({ countries, themeToggler, theme }) => {
  const { id } = useParams()

  const country = countries.find((c) => c.numericCode === id) || {}
  let languages = ''
  let currencies = ''
  let borders = []

  if ('languages' in country) {
    languages = country.languages.map((l) => l.name).join(', ')
    currencies = country.currencies.map((c) => c.name).join(', ')
    borders = lookupName(country.borders, countries)
  }

  return (
    <>
      <BackButton themeToggler={themeToggler} theme={theme} />
      <CountryWrapper>
        <Flag src={country.flag} alt="" />
        <Wrapper>
          <CountryName>{country.name || ''}</CountryName>
          <DetailsWrapper>
            <Details>
              <Detail>
                <Label>Native Name: </Label>
                {country.nativeName || ''}

              </Detail>
              <Detail>
                <Label>Population: </Label>
                {country.population || ''}

              </Detail>
              <Detail>
                <Label>Region: </Label>
                {country.region || ''}

              </Detail>
              <Detail>
                <Label>Sub Region: </Label>
                {country.subregion || ''}

              </Detail>
              <Detail>
                <Label>Capital: </Label>
                {country.capital || ''}

              </Detail>
            </Details>
            <Details>
              <Detail>
                <Label>Top Level Domain: </Label>
                {country.topLevelDomain || ''}

              </Detail>
              <Detail>
                <Label>Currencies: </Label>
                {currencies}

              </Detail>
              <Detail>
                <Label>Languages: </Label>
                {languages}

              </Detail>
            </Details>
          </DetailsWrapper>
          <BorderCountriesLabel>
            <span>Border Countries:</span>
            <CountryLink countryArray={borders} />
          </BorderCountriesLabel>
        </Wrapper>
      </CountryWrapper>
    </>
  )
}
SingleCountry.propTypes = {
  countries: PropTypes.arrayOf(PropTypes.object).isRequired,
  themeToggler: PropTypes.func.isRequired,
  theme: PropTypes.string.isRequired,
}

export default SingleCountry
