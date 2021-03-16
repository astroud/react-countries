import React from 'react'
import PropTypes from 'prop-types'
import SearchInput from './SearchBar.elements'

const SearchBar = ({ placeholder, handleSearch }) => (
  <SearchInput
    placeholder={placeholder}
    id="countrySearchField"
    onChange={handleSearch}
    autoFocus
  />
)

SearchBar.propTypes = {
  placeholder: PropTypes.string,
  handleSearch: PropTypes.func.isRequired,
}

SearchBar.defaultProps = {
  placeholder: 'Search for a country…',
}

export default SearchBar
