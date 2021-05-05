import styled from 'styled-components'

const SearchInput = styled.input`
  background-color: ${({ theme }) => theme.searchbarBackground};
  background-image: ${({ theme }) => theme.searchbarSVG};
  background-repeat: no-repeat;
  background-position: left 2.286rem center;
  color: ${({ theme }) => theme.navbarText};
  border: none;
  box-shadow: 0px 0.125rem 0.5625rem rgba(0, 0, 0, 0.0532439);
  border-radius: 0.3125rem;

  width: 100%;
  max-width: 34.286rem;
  height: var(--input-height);
  font-weight: 400;
  padding-left: 5.286rem;
  padding-right: 1rem;
  margin-bottom: 2.857rem;

  &:hover {
    
  }

`

export default SearchInput
