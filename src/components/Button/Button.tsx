import React, { Component, FC } from 'react';

type ButtonProps = {
  title: string
}

const Button: FC<ButtonProps> = ({ title }) => {
  return (
    <button
      type="button"
      className="btn btn-outline-secondary"
    >
      { title }
    </button>
  );
};

const buttonView = (PassedComponent: any) => {
  class ControlView extends Component {
    state = {
      title: 'Mark as viewed'
    };

    componentDidMount(): void {
      console.log(this.state.title);
    }

    render() {
      return (
        <PassedComponent
          title={ this.state.title }/>
      )
    }
  }

  return ControlView;
};

export const controlView = () => buttonView(Button);


export default {
  controlView
}
