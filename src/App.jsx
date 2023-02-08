import React from 'react'
import { FlexContent, Hero, Sales } from './components';
import { visinhoapi, popularsales, topratesales, sneaker, highlight } from "./data/data.js";


const App = () => {
  return (
    <>
      <main className='flex flex-col gap-16'>
        <Hero visinhoapi={visinhoapi}/>
        <Sales endpoint={popularsales} ifExists/>
        <FlexContent endpoint={highlight} ifExists/>
        <Sales endpoint={topratesales}/>
        <FlexContent endpoint={sneaker}/>
      </main>
    </>
  )
}

export default App
