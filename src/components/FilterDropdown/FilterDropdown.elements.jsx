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
  background-image: url("data:image/svg+xml,%3Csvg width='10' height='7' viewBox='0 0 10 7' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg id='expand-more'%3E%3Cpath id='Shape' fill-rule='evenodd' clip-rule='evenodd' d='M8.45 1.45L5 4.9L1.55 1.45L0.5 2.5L5 7L9.5 2.5L8.45 1.45Z' fill='${({ theme }) => theme.text}'/%3E%3C/g%3E%3C/svg%3E%0A");
  background-repeat: no-repeat;
  background-position: right 1rem center;
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
    filter: contrast(97%);
    transition: filter .25s ease-in-out;
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
