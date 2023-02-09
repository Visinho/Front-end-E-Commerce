import React from 'react'
import { FlexContent, Footer, Hero, Navbar, Sales, Stories } from './components';
import { visinhoapi, popularsales, topratesales, sneaker, highlight, story, footerAPI } from "./data/data.js";


const App = () => {
  return (
    <>
        <Navbar/>
      <main className='flex flex-col gap-16'>
        <Hero visinhoapi={visinhoapi}/>
        <Sales endpoint={popularsales} ifExists/>
        <FlexContent endpoint={highlight} ifExists/>
        <Sales endpoint={topratesales}/>
        <FlexContent endpoint={sneaker}/>
        <Stories story={story}/>
      </main>
      <Footer footerAPI={footerAPI}/>
    </>
  )
}

export default App
