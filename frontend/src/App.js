import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import GridOverlay from './components/GridOverlay';
import './App.css';

function App() {
  return (
    <div className="App">
      <GridOverlay />
      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
