import { useState } from 'react';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform'
import Alert from './Components/Alert';
import About from './Components/About';

import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [color, setColor] = useState('primary');
  const [alert, setAlert] = useState(null);
  let toAlert = (message) => {
    setAlert(message);
    setTimeout(() => {
      setAlert(null);
    }, 2500);
  }
  let toDark = () => {
    if (document.body.getAttribute('data-bs-theme') === 'light') {
      document.body.setAttribute('data-bs-theme', 'dark')
      setColor('success');
      document.getElementById('dark').innerHTML = 'Light Mode'
    } else {
      document.body.setAttribute('data-bs-theme', 'light')
      document.getElementById('dark').innerHTML = 'Dark Mode'
      setColor('primary');

    }
  }
  return (
    <Router>
      <div>
        <Navbar title='textAnalyzer' theme={toDark}></Navbar>
        <Alert color={color} alert={alert} />
        <Routes>
          <Route path="/about" element={<About />}>
          </Route>
          <Route path="/" element={
            <div className='container'>
              <Textform heading='Enter Text here' color={color} msg={toAlert}></Textform>
            </div>
          }>
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
