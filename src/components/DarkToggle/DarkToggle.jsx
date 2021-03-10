import React from 'react'
import PropTypes from 'prop-types'
import StyledWrapper from './DarkToggle.elements'
import { ReactComponent as DarkmodeSVG } from './darkmode.svg'
import { ReactComponent as LightmodeSVG } from './lightmode.svg'

const displaySVG = (theme) => {
  if (theme === 'dark') {
    return <LightmodeSVG />
  }
  return <DarkmodeSVG />
}

const DarkToggle = ({ themeToggler, theme }) => (
  <StyledWrapper>
    <label htmlFor="theme">
      {displaySVG(theme)}
      <input type="checkbox" id="theme" onChange={themeToggler} checked={theme === 'light'} />
    </label>
  </StyledWrapper>
)

DarkToggle.propTypes = {
  themeToggler: PropTypes.func.isRequired,
  theme: PropTypes.string.isRequired,
}

export default DarkToggle
