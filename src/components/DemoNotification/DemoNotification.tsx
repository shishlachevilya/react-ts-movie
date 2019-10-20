import React from 'react';

import './DemoNotification.css';
import Info from './info.svg';

const DemoNotification = () => {
  return (
    <div className="demo-notification">
      <img src={Info} alt="info"/>
      <span>Development version</span>
    </div>
  )
};

export default DemoNotification;