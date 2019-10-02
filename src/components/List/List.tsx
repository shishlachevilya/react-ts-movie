import React from 'react';
import Spinner from '../Spinner';

import './List.css';
import ListItem from '../ListItem';


interface IList {
  movies: Array<{
    imdbID: string
    Poster: string
    Title: string
    Type: string
    Year: string
  }>
}

const List: React.FC<IList> = ({movies}) => {

  if(!movies) {
    return <Spinner/>
  }

  const items = movies.map((item) => {
    return (
      <ListItem
        key={item.imdbID}
        imdbID={item.imdbID}
        Poster={item.Poster}
        Title={item.Title}
        Type={item.Type}
        Year={item.Year}/>
    )
  });

  return (
    <div>
      <ul className="list">
        {items}
      </ul>
    </div>
  );
};

export default List;
