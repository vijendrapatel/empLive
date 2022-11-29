import './App.css';
import React, { useState, useEffect } from 'react';
import Login from './MyComponent/login/login'
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './MyComponent/common/Dashboard';

function App() {
//   let auth = localStorage.getItem('authenticated')
//   useEffect(() => {
//  console.log("authththth------     "+auth);
//   },[auth])
  return (
    <div className="App">
      {/* {auth == 'success' ? <Login/> :  */}
      <Dashboard/>
      {/* } */}
    </div>
  );
}

export default App;
