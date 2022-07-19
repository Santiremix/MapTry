import './App.css';
import React from 'react';
import Home from './components/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MapView from './components/MapView';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/map' element={<MapView />}/>
            
          {/* <Route/> */}
          <Route path='/' element={<Home />}/>
            
          {/* <Route/> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
