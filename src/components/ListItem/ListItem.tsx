import React from 'react';

import './ListItem.css';

interface IListItem {
  imdbID: string
  Poster: string
  Title: string
  Type: string
  Year: string
}

const ListItem: React.FC<IListItem> = ({Poster, Title, Type, Year}) => {
  return (
    <li
      className="list__item col-3"
    >
      <div className="card">
        <img src={Poster} alt={Title}/>
        <div className="card-body">
          <h5 className="card-title">{Title}</h5>
          <p className="card-text">{`type - ${Type}`}</p>
          <p className="card-text">{`year - ${Year}`}</p>
          <button className="btn btn-info">info</button>
        </div>
      </div>
    </li>
  );
};

export default ListItem;
