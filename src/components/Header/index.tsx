import logo from '../../assets/img/Logo.svg'
import location from '../../assets/img/Location.svg'
import iconCart from '../../assets/icons/Cart.svg'
import { Navbar, Options } from './style'

export function Header() {
    return (
        <header>
            <Navbar>
                <img src={logo} alt="Logomarca" />
                <Options>
                    <img src={location} alt="Localização" />
                    <a href="#">
                        <img src={iconCart} alt="Carrinho de compras" />
                    </a>
                </Options>
            </Navbar>
        </header>
    )
}