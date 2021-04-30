import styled from 'styled-components'

const Link = styled.a`
  display: inline-block;
  min-width: 6rem;
  background: ${({ theme }) => theme.BackButtonBackground};
  color: ${({ theme }) => theme.navbarText};
  box-shadow: 0px 0px 4px 1px rgba(0, 0, 0, 0.104931);
  border-radius: 2px;
  margin-right: 0.625rem;
  padding: 0.3125rem 0.625rem;
  
  text-align: center;
  text-decoration: none;
  font-size: 0.875rem;
  margin-bottom: 0.5rem;
`

export default Link
