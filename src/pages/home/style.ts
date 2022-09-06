import styled from 'styled-components'

export const BannerContainer = styled.section`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-top: 5.875rem;
  margin-bottom: 7rem;
`

export const TextsContainer = styled.div`
  max-width: 36.75rem;
  
  h2 {
    font-family: 'Baloo 2', cursive;
    font-weight: 800;
    font-size: 48px;
    line-height: 130%;
    color: ${props => props.theme.colors.baseTitle};
  }

  p {
    font-style: normal;
    max-width: 34rem;
    font-size: 20px;
    line-height: 130%;
    color: ${props => props.theme.colors.baseSubtitle};
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

  p svg {
    width: 2rem;
    height: auto;
    border-radius: 50%;
    padding: 8px;
    color: ${props => props.theme.colors.backgorund};
  }

  p#Cart svg {
    background: ${props => props.theme.colors.yellowDark};
  }

  p#Package svg {
    background: ${props => props.theme.colors.baseText};
  }

  p#Timer svg {
    background: ${props => props.theme.colors.yellow};
  }

  p#Coffee svg {
    background: ${props => props.theme.colors.purple};
  }
`

export const Content = styled.section`
  h3 {
    margin-bottom: 2.125rem;
    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: 800;
    font-size: 32px;
    line-height: 130%;
    color: ${props => props.theme.colors.baseSubtitle};
  }
`

export const Cards = styled.div`
  
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 2rem;
`