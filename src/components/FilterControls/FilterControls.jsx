import React from 'react'
import PropTypes from 'prop-types'
import StyledWrapper from './FilterControls.elements'
import { SearchBar, FilterDropdown } from '../index'

const FilterControls = ({ handleSearch, handleRegionFilter, regionFilter }) => (
  <StyledWrapper>
    <SearchBar handleSearch={handleSearch} />
    <FilterDropdown handleRegionFilter={handleRegionFilter} regionFilter={regionFilter} />
  </StyledWrapper>
)

FilterControls.propTypes = {
  handleSearch: PropTypes.func.isRequired,
  handleRegionFilter: PropTypes.func.isRequired,
  regionFilter: PropTypes.string.isRequired,
}

export default FilterControls
