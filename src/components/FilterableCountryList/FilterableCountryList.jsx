import React from 'react'
// import PropTypes from 'prop-types'
import { StyledWrapper, CardGrid } from './FilterableCountryList.elements'
import FilterControls from '../FilterControls/FilterControls'
import CountryCard from '../CountryCard/CountryCard'

const FilterableCountryList = () => (
  <StyledWrapper>
    <FilterControls />
    <CardGrid>
      <CountryCard />
      <CountryCard />
      <CountryCard />
      <CountryCard />
      <CountryCard />
    </CardGrid>
  </StyledWrapper>

)

export default FilterableCountryList
