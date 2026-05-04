import { useState } from 'react'
import {UseStateBasics} from "./components/p1"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <UseStateBasics/>
    </>
  )
}

export default App
