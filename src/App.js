import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Events from './pages/Events';
import About from './pages/About';
import Team from './pages/Team';

function App() {
  return (
    <main className="App">
      <Routes>
        <Route path="/events" element={<Events />} />
        <Route path="/about" element={<About />} />
        <Route path="/team" element={<Team />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </main>
  );
}

export default App;
