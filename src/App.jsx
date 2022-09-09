import './App.css';
import * as React from 'react';
import { Navbar } from './components/navbar';
import { Footer } from './components/footer';
import { Translator } from './scenes/translator';
const App = () => {
  return (
  <>
  <div>
      <Navbar/>
      <Translator/>
      <Footer/>
      </div>
  </>
  )
}
export default App;





