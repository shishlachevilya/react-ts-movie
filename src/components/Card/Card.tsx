import React, {Component} from 'react';


import {Link} from 'react-router-dom';

import './Card.css';

interface IListItem {
  Poster: string
  Title: string
  imdbID: string
}

class Card extends Component<IListItem> {

  render() {
    const {Poster, Title} = this.props;
    return (
      <div className="card">
        <img
          src={Poster === 'N/A' ? 'http://dummyimage.com/300x424/6CC3D5' : Poster}
          alt={Title}
        />
        <div className="card-body">
          <h5 className="card-title">{Title}</h5>

          {/*<Link to="/detail"*/}
          {/*      className="btn btn-info"*/}
          {/*>*/}
          {/*  info*/}
          {/*</Link>*/}
          <button
            className="btn btn-success"
          >
            info
          </button>
        </div>
      </div>
    );
  }
};

export default Card;
