import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom"

import reportWebVitals from './reportWebVitals';
import Place from './components/Place/Place';
import Contact from './pages/Contact/contact';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<App/>}/>
        <Route path='/places' element={<Place/>}/>
        <Route path='/about' element={<Place/>}/>
        <Route path='/agents' element={<Place/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/place' element={<Place/>}/>
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
