/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import {
  DropdownWrapper, RegionDropdown, FilterOptions, CountryFilter, CountryFilterLabel,
} from './FilterDropdown.elements'

const FilterDropdown = ({ buttonText, handleRegionFilter, regionFilter }) => {
  const dropdownRef = useRef(null)
  const [showMenu, setShowMenu] = useState(false)

  const handleClick = () => {
    setShowMenu(!showMenu)
  }

  useEffect(() => {
    const pageClickEvent = (e) => {
      // If the active element exists and is clicked outside of
      if (dropdownRef.current !== null && !dropdownRef.current.contains(e.target)) {
        setShowMenu(!showMenu)
      }
    }

    // If the item is active (ie open) then listen for clicks
    if (showMenu) {
      window.addEventListener('click', pageClickEvent)
    }

    // cleanup
    return () => {
      window.removeEventListener('click', pageClickEvent)
    }
  }, [showMenu])

  return (
    <DropdownWrapper>
      <RegionDropdown onClick={handleClick} aria-expanded={showMenu}>
        {regionFilter === '' ? buttonText : `Filtering for ${regionFilter}`}
        {' '}
        <svg width="12" height="12" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M7.875 2.875L5 5.75L2.125 2.875L1.25 3.75L5 7.5L8.75 3.75L7.875 2.875Z" fill="currentColor" />
        </svg>
      </RegionDropdown>
      { showMenu
        ? (
          <FilterOptions ref={dropdownRef} hidden={showMenu}>
            <CountryFilter id="Africa" name="Africa" checked={regionFilter === 'Africa'} onChange={handleRegionFilter} />
            <CountryFilterLabel htmlFor="Africa">Africa</CountryFilterLabel>
            <CountryFilter id="Americas" name="Americas" checked={regionFilter === 'Americas'} onChange={handleRegionFilter} />
            <CountryFilterLabel htmlFor="Americas">Americas</CountryFilterLabel>
            <CountryFilter id="Asia" name="Asia" checked={regionFilter === 'Asia'} onChange={handleRegionFilter} />
            <CountryFilterLabel htmlFor="Asia">Asia</CountryFilterLabel>
            <CountryFilter id="Europe" name="Europe" checked={regionFilter === 'Europe'} onChange={handleRegionFilter} />
            <CountryFilterLabel htmlFor="Europe">Europe</CountryFilterLabel>
            <CountryFilter id="Oceania" name="Oceania" checked={regionFilter === 'Oceania'} onChange={handleRegionFilter} />
            <CountryFilterLabel htmlFor="Oceania">Oceania</CountryFilterLabel>
          </FilterOptions>
        )
        : '' }
    </DropdownWrapper>
  )
}

FilterDropdown.propTypes = {
  buttonText: PropTypes.string,
  handleRegionFilter: PropTypes.func.isRequired,
  regionFilter: PropTypes.string.isRequired,
}

FilterDropdown.defaultProps = {
  buttonText: 'Filter by Region',
}

export default FilterDropdown
