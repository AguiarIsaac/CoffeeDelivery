import { BrowserRouter } from 'react-router-dom'
import { Router } from './Routes'
import { Globalstyle } from './styles/globalstyle'
import { ThemeProvider } from 'styled-components'
import  light  from './styles/themes/light'
import { ShoppingContextProvider } from './contexts/ShoppingContext'


function App() {
  return (
    <>
      <ThemeProvider theme={light}>

        <ShoppingContextProvider>
          <BrowserRouter>
            <Router />
          </BrowserRouter>
        </ShoppingContextProvider>
        
        <Globalstyle />
      </ThemeProvider>
    </>
  )
}

export default App
