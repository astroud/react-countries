import React from 'react'
import PropTypes from 'prop-types'
import { useParams } from 'react-router-dom'
import Country from './SingleCountry.elements'

const SingleCountry = ({ countries }) => {
  const { id } = useParams()

  const country = countries.find((c) => c.numericCode === id) || {}
  console.log(`matching country has an id / numericCode of ${id}`)
  console.log(country)

  return (
    <Country>
      {country.name || ''}
    </Country>
  )
}
SingleCountry.propTypes = {
  countries: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default SingleCountry
