import React from 'react'
import {
  CardWrapper, LoaderFlagWrapper, LoaderCountryName, LoaderCountryDetails, LoaderFact,
} from './CountryCard.elements'

const CardLoader = () => (
  <CardWrapper>
    <LoaderFlagWrapper />
    <LoaderCountryName />
    <LoaderCountryDetails>
      <LoaderFact length="70" />
      <LoaderFact length="50" />
      <LoaderFact length="63" />
    </LoaderCountryDetails>
  </CardWrapper>
)

export default CardLoader
