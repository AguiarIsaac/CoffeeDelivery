import styled from 'styled-components'

export const Content = styled.div`
  width: 23rem;
  height: 5rem;
  background: ${props => props.theme.colors.baseCard};
  color: ${props => props.theme.colors.baseSubtitle};
  display: flex;
  padding: 0.5rem 0.25rem;
  justify-content: space-between;
  border-bottom: 1px solid ${props => props.theme.colors.baseButton};
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
  background: ${props => props.theme.colors.baseButton};
  border-radius: 6px;
  width: 4.5rem;
  height: 2rem;
  padding:8px;

  button {
    background: none;
    border: none;
    color: ${props => props.theme.colors.purple};
    cursor: pointer;
    font-size: 20px;
    transition: all 0.2s;

    &:hover {
      color: ${props => props.theme.colors.purpleDark};
    }
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
  background: ${props => props.theme.colors.baseButton};
  color: ${props => props.theme.colors.baseText};

  font-size: 12px;
  font-weight: 400;
  text-transform: uppercase;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  svg {
    color: ${props => props.theme.colors.purple};
  }

  transition: all 0.2s;

  &:hover {
    background: ${props => props.theme.colors.baseHover};
  }
`
