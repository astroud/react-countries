import styled from 'styled-components'

export const CardWrapper = styled.div`
  width: 18.857rem;
  height: 24rem;
  background: ${({ theme }) => theme.cardBackground};
`

export const CountryName = styled.p`
  padding: var(--padding-card-elements) var(--padding-card-elements) 1.143rem var(--padding-card-elements);
  font-weight: 800;
  font-size: 1.286rem;
`

export const CountryDetails = styled.ul`
  list-style: none;
  padding: 0 var(--padding-card-elements) 0 var(--padding-card-elements);
`

export const Fact = styled.li`
  padding-bottom: 0.571rem;
`
