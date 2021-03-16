import React from 'react'
import PropTypes from 'prop-types'
import StyledWrapper from './FilterControls.elements'
import { SearchBar, FilterDropdown } from '../index'

const FilterControls = ({ handleSearch }) => (
  <StyledWrapper>
    <SearchBar handleSearch={handleSearch} />
    <FilterDropdown />
  </StyledWrapper>
)

FilterControls.propTypes = {
  handleSearch: PropTypes.func.isRequired,
}

export default FilterControls
