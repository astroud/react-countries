/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import {
  DropdownWrapper, RegionDropdown, FilterOptions, CountryFilter, CountryFilterLabel,
} from './FilterDropdown.elements'

const FilterDropdown = ({ buttonText }) => {
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
      <RegionDropdown onClick={handleClick}>{buttonText}</RegionDropdown>
      { showMenu
        ? (
          <FilterOptions ref={dropdownRef} hidden={showMenu}>
            <CountryFilter id="Africa" name="Africa" />
            <CountryFilterLabel htmlFor="Africa">Africa</CountryFilterLabel>
            <CountryFilter id="America" name="America" />
            <CountryFilterLabel htmlFor="America">America</CountryFilterLabel>
            <CountryFilter id="Asia" name="Asia" />
            <CountryFilterLabel htmlFor="Asia">Asia</CountryFilterLabel>
            <CountryFilter id="Europe" name="Europe" />
            <CountryFilterLabel htmlFor="Europe">Europe</CountryFilterLabel>
            <CountryFilter id="Oceania" name="Oceania" />
            <CountryFilterLabel htmlFor="Oceania">Oceania</CountryFilterLabel>
          </FilterOptions>
        )
        : '' }
    </DropdownWrapper>
  )
}

FilterDropdown.propTypes = {
  buttonText: PropTypes.string,
}

FilterDropdown.defaultProps = {
  buttonText: 'Filter by Region',
}

export default FilterDropdown
