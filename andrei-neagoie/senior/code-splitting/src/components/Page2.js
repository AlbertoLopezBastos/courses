import React from 'react';
import logo from '../logo.svg';


const Page2 = ({ onRouteChange }) => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Page2
        </p>
        <button onClick={() => {
          onRouteChange('Page1');
        }}>page1</button>
        <button onClick={() => {
          onRouteChange('Page3');
        }}>page3</button>
      </header>
    </div>
  )
};

export default Page2;