import logo from '../../assets/img/Logo.svg'
import location from '../../assets/img/Location.svg'
import { Navbar, Options } from './style'
import { ShoppingCart } from 'phosphor-react'
import { useContext } from 'react'
import { ShoppingContext } from '../../contexts/ShoppingContext'
import { NavLink } from 'react-router-dom'

export function Header() {
    const {shoppingCart} = useContext(ShoppingContext)

    return (
        <header>
            <Navbar>
                <NavLink to={'/'}>
                    <img src={logo} alt="Logomarca" />
                </NavLink>
                
                <Options>
                    <img src={location} alt="Localização" />

                    <NavLink to={'Checkout'}>
                        <ShoppingCart/>
                    </NavLink>

                    {shoppingCart.length > 0 && <span>{shoppingCart.length}</span>}
                </Options>
            </Navbar>
        </header>
    )
}