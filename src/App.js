import './App.css';
import React, { useState, useEffect } from 'react';
import Login from './MyComponent/login/login'
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './MyComponent/common/Dashboard';

function App() {
   let auth;
   auth = localStorage.getItem('authenticated')
   console.log("auth"+auth);
  return (
    <div className="App">
      { auth == 'success' ? <Dashboard/> : <Login/>} 
    </div>
  );
}

export default App;
