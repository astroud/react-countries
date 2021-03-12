import styled from 'styled-components'

const SearchInput = styled.input`
  background-color: ${({ theme }) => theme.searchbarBackground};
  background-image: ${({ theme }) => theme.searchbarSVG};
  background-repeat: no-repeat;
  background-position: left 2.286rem center;
  color: ${({ theme }) => theme.navbarText};
  border: none;
  box-shadow: 0px 2px 9px rgba(0, 0, 0, 0.0532439);
  border-radius: 5px;

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
