import React from 'react'
import PropTypes from 'prop-types'
import SearchInput from './SearchBar.elements'

const SearchBar = ({ placeholder }) => (
  <SearchInput placeholder={placeholder} />
)

SearchBar.propTypes = {
  placeholder: PropTypes.string,
}

SearchBar.defaultProps = {
  placeholder: 'Search for a country…',
}

export default SearchBar
