import { useState } from 'react'
import './App.css'
import ProgressBar from './Components/ProgressBar'

function App() {
  const [show, setShow] = useState(false)
  return (
    <>
      {show ? <ProgressBar /> : ""}
      <button onClick={() => setShow(!show)}>Toggle</button>
    </>
  )
}

export default App
