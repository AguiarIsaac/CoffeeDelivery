import styled from 'styled-components'

export const CardContent = styled.div`
  /* Base/Card */
  background: #F3F2F2;
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

export const Tags = styled.span`
  background: #F1E9C9;
  border-radius: 100px;

  font-style: normal;
  font-weight: 700;
  font-size: 10px;
  line-height: 130%;
  text-transform: uppercase;
  padding: 4px 8px;
  /* Brand / Yellow Dark */
  color: #C47F17;

  margin-top: 0.75rem;
`

export const Title = styled.h2`
  font-family: 'Baloo 2';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 130%;

  /* Base/Subtitle */
  color: #403937;
  margin: 1rem 0 0.5rem;
`

export const Description = styled.p`
  /* Base/Label */
  color: #8D8686;

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
    /* Base/Text */
    color: #574F4D;

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
    /* Brand/Purple Dark */
    background: #4B2995;
    border-radius: 4px;
    padding: 2px 4px;
    width: 38px;
    height: 38px;
  }
`

export const Counter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  /* Base/Button */
  background: #E6E5E5;
  border-radius: 6px;
  /*padding: 4px 8px;*/
  width: 72px;
  height: 38px;

  button {
    background: none;
    border: none;
    color: #8047F8;
    cursor: pointer;
    font-size: 20px;
  }
`