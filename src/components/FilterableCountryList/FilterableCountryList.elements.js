import styled from 'styled-components'

export const StyledWrapper = styled.div`
  padding: var(--top-padding-filterable-country-list) var(--side-padding) 0 var(--side-padding);
`

export const CardGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 3rem 1rem;
  
  & > div {
    /* margin-bottom: 5.357rem; */
  }

  & > * + * {
    /* border: 1px solid red; */
    /* margin-right: 5.357rem;
    margin-bottom: 5.357rem; */
  }
`
