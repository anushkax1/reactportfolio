import React from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Skills from './components/Skills'; 
import Experience from './components/Experience';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
        <Experience />
        <Projects />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
