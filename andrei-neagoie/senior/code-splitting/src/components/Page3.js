import React from 'react';
import logo from '../logo.svg';


const Page3 = ({ onRouteChange }) => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Page3
        </p>
        <button onClick={() => {
          onRouteChange('Page1');
        }}>page1</button>
        <button onClick={() => {
          onRouteChange('Page2');
        }}>page2</button>
      </header>
    </div>
  )
};

export default Page3;