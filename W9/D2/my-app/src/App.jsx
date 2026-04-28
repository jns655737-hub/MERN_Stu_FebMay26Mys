import { useState } from 'react'
import './App.css'
// import {FunctionalComponentsBasics} from './components/FunctionalComponentsBasics.jsx'
// import {FunctionName} from './components/FunctionalCompOne.jsx'
import {ClassComponentsBasics} from './components/ClassComponentsBasics.jsx'
import {FunctionComp} from './components/FunctionalComponentAdv.jsx'



function App() {
  
  return (
    //Fragment in react :<> </>
    <>
      {/* <FunctionName/>
      <FunctionalComponentsBasics/>  */}
      <FunctionComp/>
    </>
  )
}

export default App
