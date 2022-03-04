import React from 'react';
import './css/btn.css';
import Options from './Options';

function Button() {
  return (
    <div className="home">
      <div className="main">
        <button className="btn">Click me</button>
      </div>
      <Options />
    </div>
  );
}

export default Button;
