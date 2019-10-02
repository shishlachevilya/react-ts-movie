import React, {Component} from 'react';
import Header from '../Header';
import SearchForm from '../SearchForm';
import List from '../List';
import MovieService from '../../services/movie-service';

import './App.css';

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

export type IHandler = (newTitle: string) => void;


class App extends Component<{}, IAppState, IHandler> {
  movieService = new MovieService();

  state = {
    movies: [],
    title: ''
  };

  componentDidUpdate(IAppState: IAppState, oldState: IAppState) {
    if (oldState.title === this.state.title) return;

    this.movieService.getAllMovies(this.state.title)
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

  render() {
    return (
      <div>
        <Header/>

        <main className="main">
          <div className="container mt-5">
            <SearchForm onSearchHandler={this.onSearchHandler}/>
          </div>

          <div className="container-fluid mt-5">
            <List movies={this.state.movies}/>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
