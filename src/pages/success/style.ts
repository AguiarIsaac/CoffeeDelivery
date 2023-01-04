import styled from 'styled-components'

export const Title = styled.div`
  margin: 0 auto;
  max-width: 1300px;
  margin-top: 5rem;
  margin-bottom: 2.5rem;

  h2 {
    color: ${props => props.theme.colors.yellowDark};
    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: 800;
    font-size: 32px;
    line-height: 130%;
  }

  p {
    font-weight: 400;
    font-size: 20px;
    line-height: 130%;
    color: ${props => props.theme.colors.baseSubtitle};
    
  }
`

export const ContentInfo = styled.div`
 display: flex;
 justify-content: center;
 align-items: center;
 gap: 6.375rem;
 flex-wrap: wrap;

  margin: 0 auto;
  max-width: 1300px;
`

export const OrderInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
  max-width: 32.075rem;
  
  padding: 2.5rem;
  position: relative;
  background: ${props => props.theme.colors.backgorund};
  border-radius: 6px 32px;
  margin-bottom: 1rem;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
    margin: -1px;
    border-radius: inherit;
    background-image: linear-gradient(77deg, rgba(219,172,44,1) 0%, rgba(128,71,248,1) 100%);
  }

  img {
    width: 100%;
    max-width: 30.75rem;
  }
`

export const Infos = styled.div`
 display: flex;
 gap: 0.75rem;
 align-items: center;

 font-size: 16px;
 line-height: 130%;
 color: ${props => props.theme.colors.baseText};

 svg {
      width: 2rem;
      height: auto;
      border-radius: 50%;
      padding: 8px;
      color: ${props => props.theme.colors.backgorund};
    }

  svg#Map {
    background: ${props => props.theme.colors.purple};
  }

  svg#Timer {
    background: ${props => props.theme.colors.yellow};
  }

  svg#Dolar {
    background: ${props => props.theme.colors.yellowDark};
  }
`