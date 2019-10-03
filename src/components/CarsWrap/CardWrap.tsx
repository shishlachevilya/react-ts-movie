import React from 'react';
import Spinner from '../Spinner';

import './CardWrap.css';
import Card from '../Card';


interface IList {
  movies: Array<{
    imdbID: string
    Poster: string
    Title: string
    Type: string
    Year: string
  }>
}

const CardWrap: React.FC<IList> = ({movies}) => {

  if (!movies) {
    return <Spinner/>
  }

  const items = movies.map((item) => {
    return (
      <Card
        key={item.imdbID}
        imdbID={item.imdbID}
        Poster={item.Poster}
        Title={item.Title}
      />
    )
  });

  return (
    <div className="card-wrap">
      {items}
    </div>
  );
};

export default CardWrap;
