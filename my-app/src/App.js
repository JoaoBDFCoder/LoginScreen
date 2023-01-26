import React from 'react';
import { Routes, Route } from 'react-router-dom'; 
import './App.css';

import LoginScreen from './components/js/LoginScreen';
import CameIn from './components/js/CameIn';
import Registration from './components/js/Registration';

function App () {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<LoginScreen />} />
        <Route exact path="homeIn" element={<CameIn />} />
        <Route exact path="Registration" element={<Registration />} />
      </Routes>
    </div>
  );
}

export default App;