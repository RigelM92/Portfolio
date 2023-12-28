import { GlobalReset } from "./styles/reset"
import { GlobalStyle } from "./styles/globalStyle"
import { Header } from "./components/header"
import { AboutSection } from "./components/aboutSection"
import { ProjectSection } from "./components/projectSection"

function App() {

  return (
    <>
      <GlobalReset/>
      <GlobalStyle/>
      <Header/>
      <AboutSection/>
      <ProjectSection/>
      <div>
        <p>teste</p>
      </div>
      <h1>Vite + React</h1>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
