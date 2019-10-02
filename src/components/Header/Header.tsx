import React from 'react';

const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-dark bg-info">
        LOGO

        <div className="btn-group">
          <button type="button" className="btn btn-danger">main page</button>
          <button type="button" className="btn btn-danger">my library</button>
        </div>
      </nav>
    </div>
  );
};

export default Header;
