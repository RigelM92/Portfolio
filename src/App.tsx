import { GlobalReset } from "./styles/reset"
import { GlobalStyle } from "./styles/globalStyle"
import { Header } from "./components/header"
import { AboutSection } from "./components/aboutSection"
import { ProjectSection } from "./components/projectSection"
import { ContactSection } from "./components/contactSection"
import { Footer } from "./components/footer"

function App() {

  return (
    <>
      <GlobalReset/>
      <GlobalStyle/>
      <Header/>
      <AboutSection/>
      <ProjectSection/>
      <ContactSection/>
      <Footer/>
    </>
  )
}

export default App
