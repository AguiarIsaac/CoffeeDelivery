import { BrowserRouter } from "react-router-dom"
import { Router } from "./Routes"
import { Globalstyle } from "./styles/globalstyle"

function App() {
  return (
    <>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      <Globalstyle />
    </>
  )
}

export default App
