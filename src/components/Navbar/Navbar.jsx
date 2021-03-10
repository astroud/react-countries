import React from 'react'
import PropTypes from 'prop-types'
import { StyledWrapper, HomepageLink } from './Navbar.elements'
import DarkToggle from '../DarkToggle/DarkToggle'

const Navbar = ({ themeToggler, theme }) => (
  <StyledWrapper>
    <HomepageLink href="/">Where in the world?</HomepageLink>
    <DarkToggle themeToggler={themeToggler} theme={theme} />
  </StyledWrapper>
)

Navbar.propTypes = {
  themeToggler: PropTypes.func.isRequired,
  theme: PropTypes.string.isRequired,
}

export default Navbar
