import React from 'react'
import PropTypes from 'prop-types'
import useSound from 'use-sound'
import StyledWrapper from './DarkToggle.elements'
import { ReactComponent as DarkmodeSVG } from './darkmode.svg'
import { ReactComponent as LightmodeSVG } from './lightmode.svg'
import onSfx from './on.mp3'
import offSfx from './off.mp3'

const displaySVG = (theme) => {
  if (theme === 'dark') {
    return <LightmodeSVG />
  }
  return <DarkmodeSVG />
}

const DarkToggle = ({ themeToggler, theme }) => {
  const [playOnSfx] = useSound(onSfx)
  const [playOffSfx] = useSound(offSfx)

  return (
    <StyledWrapper>
      <label htmlFor="theme">
        {displaySVG(theme)}
        <input
          type="checkbox"
          id="theme"
          onChange={themeToggler}
          checked={theme === 'light'}
          onClick={theme === 'light' ? playOffSfx : playOnSfx}
        />
      </label>
    </StyledWrapper>
  )
}
DarkToggle.propTypes = {
  themeToggler: PropTypes.func.isRequired,
  theme: PropTypes.string.isRequired,
}

export default DarkToggle
