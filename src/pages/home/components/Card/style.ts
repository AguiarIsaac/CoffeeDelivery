import styled from 'styled-components'

export const CardContent = styled.div`
  background: ${props => props.theme.colors.baseCard};
  border-radius: 6px 36px;
  min-width: 16rem;
  max-width: 16rem;
  height: 19rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    margin-top: -1.25rem;
  }
`

export const Tags = styled.div`
  display: flex;
  gap: 0.25rem;
  flex-wrap: wrap;
`
export const Tag = styled.span`
  background: ${props => props.theme.colors.yellowLight};
  border-radius: 100px;

  font-style: normal;
  font-weight: 700;
  font-size: 10px;
  line-height: 130%;
  text-transform: uppercase;
  padding: 4px 8px;
  color: ${props => props.theme.colors.yellowDark};

  margin-top: 0.75rem;
`

export const Title = styled.h2`
  font-family: 'Baloo 2';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 130%;
  color: ${props => props.theme.colors.baseSubtitle};
  margin: 1rem 0 0.5rem;
`

export const Description = styled.p`
  color: ${props => props.theme.colors.baseLabel};

  font-weight: 400;
  font-size: 14px;
  line-height: 130%;
  text-align: center;
  padding: 0 1.25rem;
  margin-top: 0.5rem;
  margin-bottom: 2.06rem;
`

export const BuyContent = styled.div`

  display: flex;
  gap: 1.43rem;
  span {
    color: ${props => props.theme.colors.baseText};

    strong {
      font-weight: 800;
      font-size: 24px;
      line-height: 130%;
    }
  }
`

export const CounterCard = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  button {
    background: #8047F8;
    border: none;
    color: #fff;
    cursor: pointer;
    background: ${props => props.theme.colors.purpleDark};
    border-radius: 4px;
    padding: 2px 4px;
    width: 38px;
    height: 38px;

  }

  button#Cart {
    transition: all 0.2s;
    
    &:hover {
      background: ${props => props.theme.colors.purple};
    }
  }
`

export const Counter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  background: ${props => props.theme.colors.baseButton};
  border-radius: 6px;
  width: 72px;
  height: 38px;

  button {
    background: none;
    border: none;
    color: ${props => props.theme.colors.purple};
    cursor: pointer;
    font-size: 20px;
  }
`