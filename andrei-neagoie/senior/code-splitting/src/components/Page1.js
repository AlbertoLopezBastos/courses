import React from 'react';
import logo from '../logo.svg';


const Page1 = ({ onRouteChange }) => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Page1
        </p>
        <button onClick={() => {
          onRouteChange('Page2');
        }}>page2</button>
        <button onClick={() => {
          onRouteChange('Page3');
        }}>page3</button>
      </header>
    </div>
  )
};

export default Page1;