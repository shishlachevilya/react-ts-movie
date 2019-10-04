import React from 'react';


import {Link} from 'react-router-dom';

import './Card.css';

interface IListItem {
  Poster: string
  Title: string
  imdbID: string
}

const Card = ({Poster, Title, imdbID}: IListItem) => {
  return (
    <div className="card">
      <img
        src={Poster === 'N/A' ? 'http://dummyimage.com/300x424/6CC3D5' : Poster}
        alt={Title}
      />
      <div className="card-body">
        <h5 className="card-title">{Title}</h5>

        <Link
          to={`/detail/${imdbID}`}
          className="btn btn-primary"
        >
          View detail
        </Link>

      </div>
    </div>
  );
};

export default Card;
