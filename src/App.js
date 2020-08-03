import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';

import Login from './components/Login.js';
import Signup from './components/Signup.js';
import Header from './components/Header.js';
import AllUsers from './components/Allusers.js';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Route path='/' component={Login} exact />
      <Route path='/signup' component={Signup} />
      <Route path='/allusers' component={AllUsers} />
    </BrowserRouter>
  );
}

export default App;
