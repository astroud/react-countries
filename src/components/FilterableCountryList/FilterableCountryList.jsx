import React from 'react'
import PropTypes from 'prop-types'
import { StyledWrapper, CardGrid } from './FilterableCountryList.elements'
import FilterControls from '../FilterControls/FilterControls'
import CountryCard from '../CountryCard/CountryCard'

const FilterableCountryList = ({ countries }) => (
  <StyledWrapper>
    <FilterControls />
    <CardGrid>
      {countries.map((country) => (
        <CountryCard country={country} key={country.name + country.population.toString()} />
      ))}
    </CardGrid>
  </StyledWrapper>
)

FilterableCountryList.propTypes = {
  countries: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default FilterableCountryList
