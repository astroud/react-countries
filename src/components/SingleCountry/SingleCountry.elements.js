import styled from 'styled-components'

export const CountryWrapper = styled.div`
  width: 100vw;
  padding: 0 5rem 0 5rem;
  margin-bottom: 5rem;
  display: flex;
`

export const Flag = styled.img`
  width: 50%;
  max-height: 25rem;
  margin-right: 4.5rem;
`

export const Wrapper = styled.div`
  width: 50%;
  margin-left: 4.5rem;
`
export const DetailsWrapper = styled.div`
  width: 100%;
  display: flex;
`

export const Details = styled.ul`
  width: 50%;
  float: left;
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
`
