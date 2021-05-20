import styled, { keyframes, css } from 'styled-components'

export const CardWrapper = styled.div`
  width: 18.857rem;
  height: 24rem;
  background: ${({ theme }) => theme.cardBackground};
  
  a{
    color: ${({ theme }) => theme.text};
    text-decoration: none;
  }
`

export const FlagWrapper = styled.div`
  width: 100%;
  height: 10rem;
  max-height: 10rem;

  img {
    width: 100%;
    height: 10rem;
    object-fit: cover;
  }  
`

export const CountryName = styled.p`
  padding: var(--padding-card-elements) var(--padding-card-elements) 1.143rem var(--padding-card-elements);
  font-weight: 800;
  font-size: 1.286rem;
`

export const CountryDetails = styled.ul`
  list-style: none;
  padding: 0 var(--padding-card-elements) 0 var(--padding-card-elements);
`

export const Fact = styled.li`
  padding-bottom: 0.571rem;
`

// Loader Styles
export const keyFrameExampleOne = keyframes`
   0%{
        background-position: -40rem 0
    }
    100%{
        background-position: 40rem 0
    }
`

const SHIMMER = css`
  animation-duration: 1.5s;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  animation-name: ${keyFrameExampleOne};
  animation-timing-function: linear;
  background: linear-gradient(to right, rgba(178, 135, 246, 0.2) 10%, rgba(178, 135, 246, 0.3) 18%, rgba(178, 135, 246, 0.2) 33%);
  background-size: 100rem 100%;
  position: relative;`

export const LoaderFlagWrapper = styled(FlagWrapper)`
  background: rgba(178, 135, 246, 0.2);
  ${SHIMMER}
`
export const LoaderCountryName = styled.div`
  background: rgba(178, 135, 246, 0.2);
  margin: var(--padding-card-elements) var(--padding-card-elements) 1.143rem var(--padding-card-elements);
  height: 1.5rem;
  width: 50%;
  margin-bottom: 1.5rem;
  ${SHIMMER}
`

export const LoaderCountryDetails = styled(CountryDetails)`
  width: 100%;
`

export const LoaderFact = styled.li`
  background: rgba(178, 135, 246, 0.2);
  width: ${(props) => props.length}%;
  height: 1.25rem;
  margin-bottom: 0.571rem;
  ${SHIMMER}
`
