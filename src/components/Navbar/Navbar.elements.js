import styled from 'styled-components'

export const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 5rem;
  padding: 0 var(--side-padding) 0 var(--side-padding);

  background: ${({ theme }) => theme.navbarBackground};
  box-shadow: 0px 0.125rem 0.25rem rgba(0, 0, 0, 0.0562443);

  font-family: Nunito Sans;
  font-style: normal;
  font-weight: 800;
  font-size: clamp(1rem, 2.7vw, 1.714rem);
  line-height: 2.0625rem;
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
