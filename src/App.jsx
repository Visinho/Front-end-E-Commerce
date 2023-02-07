import React from 'react'
import { Hero } from './components';
import { visinhoapi } from "./data/data.js";


const App = () => {
  return (
    <>
      <main>
        <Hero visinhoapi={visinhoapi}/>
      </main>
    </>
  )
}

export default App
