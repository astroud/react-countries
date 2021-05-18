import styled from 'styled-components'

export const DropdownWrapper = styled.div`
`

export const FilterOptions = styled.div`
visibility: ${(props) => (props.showMenu ? 'hidden' : 'visible')};
position: absolute;
width: 12.5rem;
display: flex;
flex-direction: column;
padding: 0.75rem 1.5rem 1rem 1.5rem;
background-color: ${({ theme }) => theme.searchbarBackground};
border-radius: 0.3125rem;
`

export const RegionDropdown = styled.button`
  background-color: ${({ theme }) => theme.searchbarBackground};
  color: ${({ theme }) => theme.navbarText};
  margin-bottom: .25rem;
  border: none;
  box-shadow: 0px 0.125rem 0.5625rem rgba(0, 0, 0, 0.0532439);
  border-radius: 0.3125rem;
  font-size: 0.857rem;
  width: 12.5rem;
  height: var(--input-height);
  font-weight: 400;
  padding-left: 1rem;
  padding-right: 1rem;
  text-align: left;
  cursor: pointer;

  &:hover {
    svg {
        transform: translateY(0.25rem);
        transition: transform 0.3s ease 0s;

    }
  }

  svg {
    float: right; 
  }

  &[aria-expanded="true"] svg {
    transform: rotate(-180deg);
  }  
`

export const CountryFilterLabel = styled.label.attrs({
  type: 'checkbox',
})`
  padding: 0.2rem 0.2rem 0.2rem 0.45rem;
  margin: 0.05rem;
`

export const CountryFilter = styled.input.attrs({
  type: 'checkbox',
})`
  display: none;

  :hover + ${CountryFilterLabel}{
    background: rgba(178, 135, 246, 0.2);
    border-radius: 0.3125rem;
  }

  :checked + ${CountryFilterLabel}{
    background: rgba(178, 135, 246, 0.5);
    border-radius: 0.3125rem;
  }
`
