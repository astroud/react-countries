import React from 'react'
import PropTypes from 'prop-types'
import {
  CardWrapper, FlagWrapper, CountryName, CountryDetails, Fact,
} from './CountryCard.elements'

const CountryCard = ({ country }) => (
  <CardWrapper>
    <FlagWrapper>
      <img src={country.flag} alt={`${country.name}'s flag`} width="264" />
    </FlagWrapper>
    <CountryName>{ country.name }</CountryName>
    <CountryDetails>
      <Fact>
        <strong>
          Population:
          {' '}
        </strong>
        {' '}
        {country.population}
      </Fact>
      <Fact>
        <strong>Region:</strong>
        {' '}
        {country.region}
      </Fact>
      <Fact>
        <strong>Capital:</strong>
        {' '}
        {country.capital}
      </Fact>
    </CountryDetails>
  </CardWrapper>
)

CountryCard.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  country: PropTypes.object.isRequired,
}

export default CountryCard
