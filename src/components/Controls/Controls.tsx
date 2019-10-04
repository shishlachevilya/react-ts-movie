import React, {Component} from 'react';

import './Controls.css';

class Controls extends Component {
  render() {
    return (
      <div className="controls">
        <button type="button" className="btn btn-outline-secondary">Mark as viewed</button>
        <button type="button" className="btn btn-outline-secondary">Plan view</button>
        <button type="button" className="btn btn-outline-secondary">Add to favorites</button>
      </div>
    );
  }
}

export default Controls;
