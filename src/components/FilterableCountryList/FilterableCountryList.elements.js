import styled from 'styled-components'

export const StyledWrapper = styled.div`
  padding: var(--top-padding-filterable-country-list) var(--side-padding) 0 var(--side-padding);
`

export const CardGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  & > div {
    margin-bottom: clamp(2.5rem, 10.7vw, 5.357rem);
  }
`
