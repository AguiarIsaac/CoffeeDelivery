import styled from 'styled-components'

export const FormContainer = styled.form`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;

  div.lineForm {
    @media(max-width: 768px) {
      width: 100%;
    }
  }

  h4 {
    margin-bottom: 2rem;
    font-family: 'Baloo 2';
    font-weight: bold;
    color: ${props => props.theme.colors.baseSubtitle};
  }
`

export const Frame1 = styled.div`
  max-width: 40rem;
  padding: 2.5rem;
  background: ${props => props.theme.colors.baseCard};
  border-radius: 6px;

  `

export const HeaderFrame1 = styled.div`
  display: flex;
  gap: 0.5rem;
  
  svg {
    color: ${props => props.theme.colors.yellowDark};
  }

  div p:nth-child(1){
  color: ${props => props.theme.colors.baseSubtitle};
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
    background: ${props => props.theme.colors.baseInput};
    border: 1px solid ${props => props.theme.colors.baseButton};
    border-radius: 4px;
    color: ${props => props.theme.colors.baseLabel};
    transition: all 0.2s;
    width: 100%;
    }

    &:focus-visible {
      outline: none;
      border: 1px solid ${props => props.theme.colors.yellowDark};
    }

  input#CEP {
    max-width: 12.5rem;
    margin-top: 2rem;
  }

  input#RUA {
    max-width: 21.75rem;
  }

  input#NUM, input#BAIRRO {
    max-width: 12.5rem;
  }

  input#COMP {
    width: 100%
  }

  input#CIDADE {
    max-width: 18rem;
  }

  input#UF {
    width: 3.75rem;
  }
`


export const PaymentMethods = styled.div`
  margin-top: 0.75rem;
  padding: 2.5rem;
  background: ${props => props.theme.colors.baseCard};
  border-radius: 6px;

  span {
    display: flex;
    align-items: center;
  }

  span.titlePayment {
    color: ${props => props.theme.colors.baseSubtitle};
    font-weight: bold;
    line-height: 130%;
  }

  p {
    margin-left: 1.35rem;
    margin-bottom: 2rem;
  }

  span svg, label svg {
    color: ${props => props.theme.colors.purple};
  }

  div {
    display: flex;
    gap: 0.75rem;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }

  label {
    display: flex;
    align-items: center;
    transition: all 0.2s;
    cursor: pointer;
    gap: 0.75rem;
    background: #E6E5E5;
    border-radius: 6px;
    width: 11.12rem;
    height: 3.18rem;
    padding: 1rem;
    
    font-size: 10px;
    line-height: 160%;
    text-transform: uppercase;
    color: ${props => props.theme.colors.baseText};
    
    &:hover {
      background: ${props => props.theme.colors.baseHover};
    }
  }
  input {
    display: none;

    &:checked + label {
      border: 1px solid ${props => props.theme.colors.purple};
      background: ${props => props.theme.colors.purpleLight};
    }
  }
  `

export const Frame2 = styled.div`
  max-width: 28rem;
  padding: 2.5rem;
  background: ${props => props.theme.colors.baseCard};
  border-radius: 6px 44px;
  color: ${props => props.theme.colors.baseText};
  
`

export const Frame21 = styled.div`
  margin-top: 1.5rem;
  margin-bottom: 0.75rem;
  display: flex;
  justify-content: space-between;
`

export const Frame22 = styled.div`
  display: flex;
  margin-bottom: 0.75rem;
  justify-content: space-between;
`

export const Frame23 = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: bold;
  color: ${props => props.theme.colors.baseTitle};
`

export const Enviar = styled.button`
 border: none;
  width: 100%;
  background: ${props => props.theme.colors.yellow};
  border-radius: 6px;
  padding: 12px 8px;
  margin-top: 2rem;
  text-transform: uppercase;
  font-weight: bold;
  color: ${props => props.theme.colors.white};
  transition: all 0.2s;
  cursor: pointer;

  &:hover {
    background: ${props => props.theme.colors.yellowDark};
  }
`