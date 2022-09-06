import styled from 'styled-components'

export const Navbar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 2.25rem;
  margin-bottom: 2.25rem;
`

export const Options = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  svg {
    color: ${props => props.theme.colors.yellowDark};
    background-color: ${props => props.theme.colors.yellowLight};
    width: 2.375rem;
    height: 2.375rem;
    padding: 8px;
    border-radius: 8px;
  }
`