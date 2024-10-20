import { useState } from 'react'
import HeroPage from './components/HeroPage'
import Intro from './components/Intro'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <HeroPage />
      <Intro />
    </>
  )
}

export default App
