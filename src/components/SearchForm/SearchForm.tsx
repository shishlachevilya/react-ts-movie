import React, {Component} from 'react';
import {IHandler} from '../App/App';


interface HandleNameChangeInterface {
  target: HTMLInputElement;
}

interface AddFormI {
  onSearchHandler: IHandler
}

class SearchForm extends Component<AddFormI> {

  state = {
    value: ''
  };

  onSubmitHandler = (e: any) => {
    e.preventDefault();

    this.props.onSearchHandler(this.state.value);

    this.setState({
      value: ''
    });
  };

  onChangeSubmit = (event: HandleNameChangeInterface) => {
    this.setState({
      value: event.target.value
    });
  };

  render() {
    return (
      <form
        onSubmit={this.onSubmitHandler}
      >
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Enter movie title"
            value={this.state.value}
            onChange={this.onChangeSubmit}
          />
        </div>
        <div className="form-group">
          <button
            type="submit"
            className="btn btn-block btn-info"
          >
            Search film
          </button>
        </div>
      </form>
    );
  }
}

export default SearchForm;
