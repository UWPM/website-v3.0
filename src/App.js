import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';

function App() {
  return (
    <main className="App">
      <Routes>
        <Route path="*" element={<Home />} />
      </Routes>
    </main>
  );
}

export default App;
