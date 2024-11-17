import { useState } from 'react'

import Navbar from './components/Navbar';
import Hero from './components/hero';
import Features from './components/Feature';


function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
    </>
  );
}

export default App;
