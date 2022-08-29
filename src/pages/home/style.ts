import styled from 'styled-components'

export const BannerContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  margin-top: 5.875rem;
`

export const TextsContainer = styled.div`
  max-width: 36.75rem;
  font-family: 'Roboto', sans-serif;
  
  h2 {
    font-family: 'Baloo 2', cursive;
    font-weight: 800;
    font-size: 48px;
    line-height: 130%;
    color: #272221; /*Base/Title*/
  }

  p {
    font-style: normal;
    max-width: 34rem;
    font-size: 20px;
    line-height: 130%;
    color: #403937;
    font-stretch: 100;
  }
`

export const Benefits = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 1.59rem;
  margin-top: 4.125rem;

  p {
    display: flex;
    align-items: center;
    gap: 1.375rem;
  }
`