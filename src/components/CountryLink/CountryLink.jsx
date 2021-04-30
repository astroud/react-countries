import React from 'react'
import PropTypes from 'prop-types'
import Link from './CountryLink.elements'

const CountryLink = ({ countryArray }) => countryArray.map((c) => (
  <Link href={c.id} key={c.id}>
    {c.name}
  </Link>
))

CountryLink.propTypes = {
  countryArray: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default CountryLink
