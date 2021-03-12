import React from 'react'
import PropTypes from 'prop-types'
import RegionDropdown from './FilterDropdown.elements'

const FilterDropdown = ({ placeholder }) => (
  <RegionDropdown placeholder={placeholder} />
)

FilterDropdown.propTypes = {
  placeholder: PropTypes.string,
}

FilterDropdown.defaultProps = {
  placeholder: 'Filter by Region',
}

export default FilterDropdown
