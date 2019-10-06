import React, { Component } from 'react';

import './Pagination.css';

import { onChangePage } from '../HomePage/HomePage';

interface IPagination {
  onChangePage: onChangePage
  page: number
  count: number
}

class Pagination extends Component<IPagination> {

  onClickHandler = ({ target }: any) => {
    this.props.onChangePage(target.dataset.label)
  };

  render() {
    const { count } = this.props;
    return (
      <ul className="pagination">
        <li className="page-item">
          { count > 1 && <button
            type="button"
            className="btn btn-outline-primary"
            data-label="prev"
            onClick={ this.onClickHandler }
          >
            prev
          </button> }

        </li>
        <li className="page-item">
          <button type="button" disabled className="btn btn-outline-primary">{ this.props.page }</button>
        </li>
        <li className="page-item">
          <button
            type="button"
            className="btn btn-outline-primary"
            data-label="next"
            onClick={ this.onClickHandler }
          >
            next
          </button>
        </li>
      </ul>
    );
  }
}

export default Pagination;