import React from 'react';
import './ErrorPage.css';

const ErrorPage = (props) => {
  return (
    <div className="error-page">
      <h1>Error : {props.errorMessage}</h1>
    </div>
  )
}

export default ErrorPage;