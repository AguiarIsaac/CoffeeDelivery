import logo from '../../assets/img/Logo.svg'
import location from '../../assets/img/Location.svg'
import { Navbar, Options } from './style'
import { ShoppingCart } from 'phosphor-react'
import { useContext } from 'react'
import { ShoppingContext } from '../../contexts/ShoppingContext'

export function Header() {
    const {shoppingCart} = useContext(ShoppingContext)

    return (
        <header>
            <Navbar>
                <img src={logo} alt="Logomarca" />
                <Options>
                    <img src={location} alt="Localização" />
                    <a href="#">
                        <ShoppingCart/>
                    </a>

                    {shoppingCart.length > 0 && <span>{shoppingCart.length}</span>}
                </Options>
            </Navbar>
        </header>
    )
}