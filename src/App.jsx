import Header from "./components/Header"
import Typing from "./components/Typing"
import Footer from "./components/Footer"
import Results from "./components/Results"
import { useState } from "react"

function App() {
  const [completed, setCompleted] = useState(true)

  function restartTest() {
    setCompleted(false)
  }

  return (
    <main>
      <Header/>
      <Typing/>
      <Footer/>
      {completed ? <Results restartTest={restartTest}/> : ""}
    </main>
  )
}

export default App
