import { GlobalReset } from "./styles/reset"
import { GlobalStyle } from "./styles/globalStyle"
import { Header } from "./components/header"
import { Footer } from "./components/footer"
import { RoutesMain } from "./routes"

function App() {

  return (
    <>
      <GlobalReset/>
      <GlobalStyle/>
      <Header/>
      <RoutesMain/>
      <Footer/>
    </>
  )
}

export default App
