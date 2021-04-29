/* eslint-disable react/no-unused-prop-types */
import React from 'react'
import { useHistory } from 'react-router-dom'
import PropTypes from 'prop-types'
import Button from './BackButton.elements'

const BackButton = () => {
  const history = useHistory()

  return (
    <Button
      type="button"
      onClick={() => {
        history.goBack()
      }}
    >
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M6.46447 4.10744L7.64298 5.28596L3.75389 9.17504L18.6031 9.17504L18.6031 10.825L3.75389 10.825L7.64298 14.714L6.46447 15.8926L0.57191 10L6.46447 4.10744Z" fill="currentColor" />
      </svg>
      Back
    </Button>
  )
}

BackButton.propTypes = {
  themeToggler: PropTypes.func.isRequired,
  theme: PropTypes.string.isRequired,
}

export default BackButton
