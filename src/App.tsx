import { BrowserRouter } from 'react-router-dom'
import { Router } from './Routes'
import { Globalstyle } from './styles/globalstyle'
import { ThemeProvider } from 'styled-components'
import  light  from './styles/themes/light'


function App() {
  return (
    <>
      <ThemeProvider theme={light}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
        <Globalstyle />
      </ThemeProvider>
    </>
  )
}

export default App
