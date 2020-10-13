import React from 'react';
import ReactDOM from 'react-dom';
import useLocation from './components/useLocation';
import SeasonDisplay from './components/SeasonDisplay';
import Spinner from './components/Spinner';
import ErrorPage from './components/ErrorPage';

const App = () => {
  const [lat, errorMessage] = useLocation();

  let content;
  if (errorMessage) {
    content = <div>Error: {errorMessage}</div>;
  }
  else if (lat) {
    content = <SeasonDisplay lat={lat} />;
  }
  else {
    content = <Spinner message="Please accept location request" />
  }
  return <div className="border red">{content}</div>;
}

ReactDOM.render(<App />, document.querySelector('#root'));