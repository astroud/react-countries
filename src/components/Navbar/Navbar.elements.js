import styled from 'styled-components'

export const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 5rem;
  padding: 0 var(--side-padding) 0 var(--side-padding);

  background: ${({ theme }) => theme.navbarBackground};
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.0562443);

  font-family: Nunito Sans;
  font-style: normal;
  font-weight: 800;
  font-size: 1.5rem;
  line-height: 33px;
  /* identical to box height */
`

export const HomepageLink = styled.a`
  color: ${({ theme }) => theme.navbarText};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }

  &:visited {
    color: ${({ theme }) => theme.navbarText};
  }
`
