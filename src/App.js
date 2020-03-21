import React, { useState } from 'react';
import './App.css';
import './Stylesheets/styling.css'
import Navbar from './Components/Navbar';
import Card from './Components/Card';
import Skills from './Components/Skills';

const app = props => {
  return (
    <div className="App">
      <Navbar />
    </div>
  );
}

export default app;
