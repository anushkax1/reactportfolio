import React from 'react';
import './App.css';
import Header from './Header';
import About from './About';
import Projects from '.Projects';
import Contact from './Contact';
import Skills from './Skills'; 
import Experience from './Experience';

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
