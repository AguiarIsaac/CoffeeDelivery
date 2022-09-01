import styled from 'styled-components'

export const Content = styled.div`
  width: 23rem;
  height: 5rem;

  /* Base/Card */
  background: #F3F2F2;

  /* Base/Subtitle */
  color: #403937;

  display: flex;
  padding: 0.5rem 0.25rem;
  justify-content: space-between;

  /* Base/Button */

  border-bottom: 1px solid #E6E5E5;
`

export const Price = styled.p`
  font-weight: bold;
`

export const Info = styled.div`
  display: flex;
  gap: 1.25rem;
`

export const Counter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  /* Base/Button */
  background: #E6E5E5;
  border-radius: 6px;
  /*padding: 4px 8px;*/
  width: 4.5rem;
  height: 2rem;
  padding:8px;

  button {
    background: none;
    border: none;
    color: #8047F8;
    cursor: pointer;
    font-size: 20px;
  }
`

export const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 0.5rem;
`

export const ButtonRemove = styled.button`
  border: none;
  width: 5.8rem;
  height: 2rem;
  border-radius: 6px;
  /* Base/Button */
  background: #E6E5E5;
  /* Base/Text */
  color: #574F4D;

  font-size: 12px;
  font-weight: 400;
  text-transform: uppercase;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  svg {
    /* Brand/Purple */
    color: #8047F8;
  }
`
