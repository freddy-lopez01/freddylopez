import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Imported Pages comprised of multiple components
import NavBar from './components/NavBar.jsx';
import Home from './components/Home.jsx';
import Projects from './components/Projects.jsx';
import Gallery from './components/Gallery.jsx';
import MachineLearning from './components/MachineLearning.jsx';


function App() {
  return (
    <>
    <Router>
      <NavBar/>
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/gallery' element={<Gallery/>}/> 
        <Route path='/machine-learning' element={<MachineLearning/>}/> 
      </Routes>
    </Router>
    </>
  );
}

export default App;
