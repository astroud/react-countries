import styled from 'styled-components'

const smallScreen = '768px'

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.BackButtonBackground};
  color: ${({ theme }) => theme.navbarText};
  border-radius: 0.375rem;
  border: none;
  padding: 0.625rem 2rem 0.625rem;
  margin: 5rem 0 5rem 5rem;
  cursor: pointer;

  &:hover {
    /* box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.293139); */
    transition: 0.5s ease-in-out;
    svg {
      transform: scale(1.25);
      transition: 0.2s ease-in-out;
    }
  }

  > svg {
    padding-right: 0.625rem;
  }

  @media(max-width: ${smallScreen}) {
    margin: 2.5rem 0 4rem 5rem;
  }
`

export default Button
