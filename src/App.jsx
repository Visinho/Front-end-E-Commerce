import React from 'react'
import { FlexContent, Hero, Sales, Stories } from './components';
import { visinhoapi, popularsales, topratesales, sneaker, highlight, story } from "./data/data.js";


const App = () => {
  return (
    <>
      <main className='flex flex-col gap-16'>
        <Hero visinhoapi={visinhoapi}/>
        <Sales endpoint={popularsales} ifExists/>
        <FlexContent endpoint={highlight} ifExists/>
        <Sales endpoint={topratesales}/>
        <FlexContent endpoint={sneaker}/>
        <Stories story={story}/>
      </main>
    </>
  )
}

export default App
