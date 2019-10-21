import React, {Component} from 'react';
import './Controls.css';
import {ButtonMark, ButtonPlan, ButtonAdd} from '../Button'


class Controls extends Component {
  render() {
    return (
      <div className="controls">
        <ButtonMark/>
        <ButtonPlan/>
        <ButtonAdd/>
      </div>
    );
  }
}

export default Controls;
