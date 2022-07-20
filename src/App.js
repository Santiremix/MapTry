import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MapView from './components/MapView';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/map' element={<MapView />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
