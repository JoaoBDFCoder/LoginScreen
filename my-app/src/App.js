import React from 'react';
import { Routes, Route } from 'react-router-dom'; 
import './App.css';

import LoginScreen from './components/js/LoginScreen';
import CameIn from './components/js/CameIn';

function App () {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<LoginScreen />} />
        <Route exact path="Sobre" element={<CameIn />} />
      </Routes>
    </div>
  );
}

export default App;