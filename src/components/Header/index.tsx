import logo from '../../assets/img/Logo.svg'
import location from '../../assets/img/Location.svg'
import { Navbar, Options } from './style'
import { ShoppingCart } from 'phosphor-react'

export function Header() {
    return (
        <header>
            <Navbar>
                <img src={logo} alt="Logomarca" />
                <Options>
                    <img src={location} alt="Localização" />
                    <a href="#">
                        <ShoppingCart/>
                    </a>
                </Options>
            </Navbar>
        </header>
    )
}