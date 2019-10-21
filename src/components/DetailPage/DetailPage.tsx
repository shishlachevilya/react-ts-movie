import React, { Component, Fragment } from 'react';
import MovieService from '../../services/movie-service';
import Controls from '../Controls';

import './DetailPage.css';
import Row from '../Row';

interface IState {
  Poster: string,
  Title: string,
  Year: string,
  Awards: string,
  Rating: string,
  Votes: string,
  Actors: string,
  Country: string,
  Runtime: string,
  Genre: string,
  Plot: string
}

interface IProps {
  id: string
}

class DetailPage extends Component<{ id: IProps }, IState> {
  movieService = new MovieService();

  state = {
    Poster: '',
    Title: '',
    Year: '',
    Awards: '',
    Rating: '',
    Votes: '',
    Actors: '',
    Country: '',
    Runtime: '',
    Genre: '',
    Plot: ''
  };

  componentDidMount(): void {
    const { id } = this.props;

    this.renderInfo(id);
  }

  renderInfo = (id: IProps) => {
    return this.movieService.getMovieInfo(id)
      .then((info) => {
        this.setState({
          Poster: info.Poster,
          Title: info.Title,
          Year: info.Year,
          Awards: info.Awards,
          Rating: info.imdbRating,
          Votes: info.imdbVotes,
          Actors: info.Actors,
          Country: info.Country,
          Runtime: info.Runtime,
          Genre: info.Genre,
          Plot: info.Plot
        });
      });
  };

  render() {
    const { Poster, Title, Year, Rating, Votes, Actors, Plot, Awards, Genre, Country, Runtime } = this.state;

    const detailCard = (
      <div className="detail-card">
        <div className="detail-card__col">
          <img
            src={ Poster === 'N/A' ? 'http://dummyimage.com/300x424/6CC3D5' : Poster }
            alt={ Title }/>
        </div>
        <div className="detail-card__col">
          <h1 className="h1">{ Title } <span className="badge badge-primary">{ Year }</span></h1>
          <p>{ Plot }</p>
          <p><strong>Awards:</strong> { Awards }</p>
          <p><strong>Rating:</strong> <span className="badge badge-primary">{ Rating } / 10</span> <span
            className="votes">{ Votes } votes</span></p>
          <p><strong>Actors:</strong> { Actors }</p>
          <p><strong>Country:</strong> { Country }</p>
          <p><strong>Genre:</strong> { Genre }</p>
          <p><strong>Runtime:</strong> { Runtime }</p>
        </div>
      </div>
    );

    const controls = (
      <Controls/>
    );

    return (
      <Fragment>
        <Row element={ detailCard }/>

        <Row element={ controls }/>
      </Fragment>
    );
  }
}

export default DetailPage;
