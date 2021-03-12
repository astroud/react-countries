import React from 'react'
// import PropTypes from 'prop-types'
import StyledWrapper from './FilterControls.elements'
import { SearchBar, FilterDropdown } from '../index'

const FilterControls = () => (
  <StyledWrapper>
    <SearchBar />
    <FilterDropdown />
  </StyledWrapper>
)

// FilterControls.propTypes = {
//   themeToggler: PropTypes.func.isRequired,
//   theme: PropTypes.string.isRequired,
// }

export default FilterControls
