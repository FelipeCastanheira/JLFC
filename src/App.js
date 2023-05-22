import './App.css';
import React from 'react';
import Navbar from './components/header/Navbar';
import Main from './components/main/Main';
import About from './components/about/About';




function App() {
  return (
    <div className="App">
     <Navbar/>
     <Main/>
  <About/>
    </div>
  );
}

export default App;
