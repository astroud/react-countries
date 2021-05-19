import React from 'react'
import PropTypes from 'prop-types'
import { StyledWrapper, CardGrid } from './FilterableCountryList.elements'
import FilterControls from '../FilterControls/FilterControls'
import CountryCard from '../CountryCard/CountryCard'
// eslint-disable-next-line import/extensions
import CardLoader from '../CountryCard/CardLoader.jsx'

const FilterableCountryList = ({
  countries, handleSearch, handleRegionFilter, regionFilter,
}) => {
  if (countries.length === 1) {
    return (
      <StyledWrapper>
        <FilterControls
          handleSearch={handleSearch}
          handleRegionFilter={handleRegionFilter}
          regionFilter={regionFilter}
        />
        <CardGrid>
          <CardLoader />
          <CardLoader />
          <CardLoader />
          <CardLoader />
          <CardLoader />
          <CardLoader />
        </CardGrid>
      </StyledWrapper>
    )
  }
  return (
    <StyledWrapper>
      <FilterControls
        handleSearch={handleSearch}
        handleRegionFilter={handleRegionFilter}
        regionFilter={regionFilter}
      />
      <CardGrid>
        {countries.map((country) => (
          <CountryCard country={country} key={country.name + country.population.toString()} />
        ))}
      </CardGrid>
    </StyledWrapper>
  )
}

FilterableCountryList.propTypes = {
  countries: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleSearch: PropTypes.func.isRequired,
  handleRegionFilter: PropTypes.func.isRequired,
  regionFilter: PropTypes.string.isRequired,
}

export default FilterableCountryList
