import React from 'react'
import PropTypes from 'prop-types'
import { useParams } from 'react-router-dom'
import { BackButton } from '../index'
import Country from './SingleCountry.elements'

const SingleCountry = ({ countries, themeToggler, theme }) => {
  const { id } = useParams()

  const country = countries.find((c) => c.numericCode === id) || {}
  console.log(`matching country has an id / numericCode of ${id}`)
  console.log(country)

  return (
    <>
      <BackButton themeToggler={themeToggler} theme={theme} />
      <Country>
        {country.name || ''}
      </Country>
    </>
  )
}
SingleCountry.propTypes = {
  countries: PropTypes.arrayOf(PropTypes.object).isRequired,
  themeToggler: PropTypes.func.isRequired,
  theme: PropTypes.string.isRequired,
}

export default SingleCountry
