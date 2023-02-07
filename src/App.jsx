import React from 'react'
import { Hero, Sales } from './components';
import { visinhoapi, popularsales, topratesales } from "./data/data.js";


const App = () => {
  return (
    <>
      <main>
        <Hero visinhoapi={visinhoapi}/>
        <Sales endpoint={popularsales}/>
        <Sales endpoint={topratesales}/>
      </main>
    </>
  )
}

export default App
