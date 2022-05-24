import React from "react"
import { Auth } from "./Auth"
import { Hero } from "./Homepage"
import List from "./List"
import Message from "./Message"
// import Setup from "./search"
function App() {
  return (
    <div className="App">
      <Auth />
      <Hero />
      <List />
      <Message />
    </div>
  )
}

export default App
