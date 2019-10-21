import React from 'react';
import Row from '../Row';

import './ErrorMessage.css';

const ErrorMessage = () => {

  const msg = (
    <div className="error">
      <p className="sorry">Sorry!</p>
      <p>something wrong</p>
      <p>we will fix it soon</p>
    </div>
  );

  return (
    <Row element={ msg }/>
  );
};

export default ErrorMessage;
