import React from 'react'
// import PropTypes from 'prop-types'
import {
  CardWrapper, CountryName, CountryDetails, Fact,
} from './CountryCard.elements'

const CountryCard = () => (
  <CardWrapper>
    <img src="https://restcountries.eu/data/col.svg" alt="flag" width="264" height="160" />
    <CountryName>Figmantia</CountryName>
    <CountryDetails>
      <Fact>
        <strong>Population:</strong>
        {' '}
        81,770,900
      </Fact>
      <Fact>
        <strong>Region:</strong>
        {' '}
        Europe
      </Fact>
      <Fact>
        <strong>Capital:</strong>
        {' '}
        Berlin
      </Fact>
    </CountryDetails>
  </CardWrapper>
)

// CountryCard.propTypes = {
//   themeToggler: PropTypes.func.isRequired,
//   theme: PropTypes.string.isRequired,
// }

export default CountryCard
