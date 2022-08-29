import {Route, Routes} from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaoultLayout'
import { Checkout } from './pages/checkout'
import { CheckoutFilled } from './pages/checkout_filled'
import { Home } from './pages/home'
import { Success } from './pages/success'

export function Router() {
    return (
        <Routes>
          <Route path="/" element={<DefaultLayout/>}>
            <Route path="home" element={<Home />}/>
            <Route path="checkout" element={<Checkout />}/>
            <Route path="checkoutfilled" element={<CheckoutFilled />}/>
            <Route path="success" element={<Success />}/>
          </Route>
        </Routes>
    )
}