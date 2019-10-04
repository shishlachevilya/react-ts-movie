import React from 'react';

import Git from './git.svg';
import In from './in.svg';
import Mail from './mail.svg';
import Telegram from './t.svg';

import './Footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <button type="button" className="btn btn-light">
        <img src={Git} alt="git"/>
      </button>
      <button type="button" className="btn btn-light">
        <img src={In} alt="linkedin"/>
      </button>
      <button type="button" className="btn btn-light">
        <img src={Mail} alt="mail"/>
      </button>
      <button type="button" className="btn btn-light">
        <img src={Telegram} alt="telegram"/>
      </button>
    </div>
  );
};

export default Footer;
