import styled from 'styled-components'

const RegionDropdown = styled.input`
  background-color: ${({ theme }) => theme.searchbarBackground};
  color: ${({ theme }) => theme.navbarText};
  margin-bottom: 2.286rem;




  border: none;
  box-shadow: 0px 2px 9px rgba(0, 0, 0, 0.0532439);
  border-radius: 5px;

  font-size: 0.857rem;
  width: 14.286rem;
  
  height: var(--input-height);
  font-weight: 400;
  padding-left: 1rem;
  padding-right: 1rem;
  text-align: center;

  &:hover {
    
  }

`

export default RegionDropdown
