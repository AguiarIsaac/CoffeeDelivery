import styled from 'styled-components'

export const FormContainer = styled.form`
  display: flex;
  gap: 2rem;

  h4 {
    margin-bottom: 2rem;
    font-family: 'Baloo 2';
    font-weight: bold;
    /* Base/Subtitle */
    color: #403937;
  }
`

export const Frame1 = styled.div`
  max-width: 40rem;
  padding: 2.5rem;
  
  /* Base/Card */
  background: #F3F2F2;
  border-radius: 6px;

  `

export const HeaderFrame1 = styled.div`
  display: flex;
  gap: 0.5rem;
  
  svg {
    color: #C47F17;
  }

  div p:nth-child(1){
  /* Base/Subtitle */
  color: #403937;
  font-weight: bold;
  margin-bottom: 0.5rem;
  }
`

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  div {
    display: flex;
    gap: 0.75rem;
  }

  input {
    padding: 12px;
    /* Base/Input */
    background: #EEEDED;
    /* Base/Button */
    border: 1px solid #E6E5E5;
    border-radius: 4px;
    /* Base/Label */
    color: #8D8686;
  }

  input#CEP {
    width: 12.5rem;
    margin-top: 2rem;
  }

  input#RUA {
    width: 21.75rem;
  }

  input#NUM, input#BAIRRO {
    width: 12.5rem;
  }

  input#COMP {
    width: 100%
  }

  input#CIDADE {
    width: 18rem;
  }

  input#UF {
    width: 3.75rem;
  }
`


export const PaymentMethods = styled.div`
  margin-top: 0.75rem;
  padding: 2.5rem;
  /* Base/Card */
  background: #F3F2F2;
  border-radius: 6px;

  span {
    display: flex;
    align-items: center;
  }

  span.titlePayment {
    /* Base/Subtitle */
    color: #403937;
    font-weight: bold;
    line-height: 130%;
  }

  p {
    margin-left: 1.35rem;
    margin-bottom: 2rem;
  }

  span svg {
    /* Brand/Purple */
    color: #8047F8;
  }

  div {
    display: flex;
    gap: 0.75rem;
  }

  div span {
    /* Base/Button */
    gap: 0.75rem;
    background: #E6E5E5;
    border-radius: 6px;
    width: 11.12rem;
    height: 3.18rem;
    padding: 1rem;

    font-size: 10px;
    line-height: 160%;
    /* or 19px */

    text-transform: uppercase;

    /* Base/Text */

    color: #574F4D;

  }
`

export const Frame2 = styled.div`
  width: 28rem;
  padding: 2.5rem;
  /* Base/Card */
  background: #F3F2F2;
  border-radius: 6px 44px;
`