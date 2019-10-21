import React, {Component} from 'react';

const ButtonWrapperMark = (PassedComponent: any) => {
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

const ButtonWrapperPlan = (PassedComponent: any) => {
  class ControlView extends Component {
    state = {
      title: 'Plan view'
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

const ButtonWrapperAdd = (PassedComponent: any) => {
  class ControlView extends Component {
    state = {
      title: 'Add to favorites'
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

export {
  ButtonWrapperMark,
  ButtonWrapperPlan,
  ButtonWrapperAdd
};
