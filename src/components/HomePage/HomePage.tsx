import React, {Component} from 'react';

import SearchForm from '../SearchForm';
import MovieService from '../../services/movie-service';
import CardWrap from '../CardWrap';

import './HomePage.css';

interface IMoviesItem {
  imdbID: string
  Poster: string
  Title: string
  Type: string
  Year: string
}

interface IAppState {
  movies: Array<IMoviesItem>
  title: string
}

export type IInfoHandler = (id: string) => void;

export type IHandler = (newTitle: string) => void;

class HomePage extends Component<{}, IAppState, IHandler> {
  movieService = new MovieService();

  state = {
    movies: [],
    title: ''
  };

  componentDidUpdate(IAppState: IAppState, oldState: IAppState) {
    if (oldState.title === this.state.title) return;

    this.updateMovie();
  }

  updateMovie() {
    const {title} = this.state;

    if (!title) {
      return;
    }

    this.movieService.getAllMovies(title)
      .then((movies) => {
        this.setState({
          movies: movies.Search
        })
      });

  }

  onSearchHandler: IHandler = (newTitle) => {
    this.setState({
      title: newTitle
    });
  };

  onInfoHandler: IInfoHandler = (id) => {
    console.log(id);
  };

  render() {
    return (
      <div>
        <div className="container mt-5">
          <SearchForm onSearchHandler={this.onSearchHandler}/>
        </div>

        <div className="container-fluid mt-5">
          <CardWrap
            movies={this.state.movies}
          />
        </div>
      </div>
    );
  }
}

export default HomePage;
