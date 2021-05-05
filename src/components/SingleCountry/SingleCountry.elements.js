import styled from 'styled-components'

const smallScreen = '768px'

export const CountryWrapper = styled.div`
  width: 100vw;
  padding: 0 5rem 0 5rem;
  margin-bottom: 5rem;
  display: flex;

  @media(max-width: ${smallScreen}) {
    flex-wrap: wrap;
  }
`

export const Flag = styled.img`
  width: 50%;
  max-height: 25rem;
  margin-right: 4.5rem;
  object-fit: contain;
  object-position: center top;
  
  @media(max-width: ${smallScreen}) {
    width: 100%;
  }
`

export const Wrapper = styled.div`
  width: 50%;
  padding-left: 2vw;

  @media(max-width: ${smallScreen}) {
    width: 100%;
    padding-left: 0;
  }
`
export const DetailsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`

export const Details = styled.ul`
  width: 45%;
  margin-right: 5%;

  @media(max-width: 1200px) {
    width: 100%;
    margin-right: 0;
    margin-bottom: 2rem;
  }
`

export const Detail = styled.li`
  list-style-type: none;
  font-size: 1rem;
  line-height: 2rem;
`

export const Label = styled.span`
  font-weight: 600;
`

export const CountryName = styled.h1`
  font-weight: 800;
  font-size: 2rem;
  line-height: 2.75rem;
  margin: 2.5rem 0 1.4375rem 0;
`

export const BorderCountriesLabel = styled.h2`
  font-weight: 600;
  margin-top: 4.25rem;

  span {
    margin-right: 1rem;
  }

  @media(max-width: ${smallScreen}) {
    margin-top: 2.25rem;
    
    span {
      display: block;
      margin-bottom: 1rem;
    }
  }
`
