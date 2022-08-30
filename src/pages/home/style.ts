import styled from 'styled-components'

export const BannerContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-top: 5.875rem;

  //background: rgb(128,71,248);
  //background: linear-gradient(77deg, rgba(128,71,248,0.13769257703081228) 0%, rgba(244,225,165,0.25253851540616246) 91%, rgba(235,193,54,0.3253676470588235) 100%);
`

export const TextsContainer = styled.div`
  max-width: 36.75rem;
  
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

export const CardContent = styled.div`
  margin-top: 2rem;

  h3 {
    margin-bottom: 2rem;

    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: 800;
    font-size: 32px;
    line-height: 130%;

    /* Base/Subtitle */
    color: #403937;
  }
`

export const Cards = styled.div`
`