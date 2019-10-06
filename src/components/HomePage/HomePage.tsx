import React, { Component } from 'react';

import SearchForm from '../SearchForm';
import MovieService from '../../services/movie-service';
import Pagination from '../Pagination';
import CardWrap from '../CardWrap';

import './HomePage.css';

export interface IMoviesItem {
  imdbID: string
  Poster: string
  Title: string
  Type: string
  Year: string
}

interface IAppState {
  movies: Array<IMoviesItem>
  title: string,
  isVisible: boolean
  page: number
}

export type IHandler = (newTitle: string) => void;
export type onChangePage = (label: any) => void;
type updatePage = (number: number) => void;

class HomePage extends Component<{}, IAppState, IHandler> {
  movieService = new MovieService();

  state = {
    movies: [],
    title: '',
    isVisible: false,
    page: 1
  };

  componentDidUpdate(IAppState: IAppState, oldState: IAppState) {
    if (oldState.title === this.state.title) return;

    this.updateMovie();
  }

  updateMovie() {
    const { title } = this.state;

    if (!title) {
      return;
    }

    this.movieService.getAllMovies(title)
      .then((movies) => {
        this.setState({
          movies: movies.Search,
          isVisible: true
        })
      });
  }

  onSearchHandler: IHandler = (newTitle) => {
    this.setState({
      title: newTitle
    });
  };

  onChangePage: onChangePage = (label) => {
    let { page } = this.state;

    switch (label) {
      case 'next':
        this.updatePage(page + 1);
        break;
      case 'prev':
        if (page > 1) {
          this.updatePage(page - 1);
        }
        break;
      default:
        console.log('default');
    }
  };

  updatePage: updatePage = (page) => {
    this.setState({
      page: page
    });

    this.movieService.changePage(this.state.title, page)
      .then((movies) => {
        this.setState({
          movies: movies.Search
        })
      });
  };

  render() {
    const { isVisible } = this.state;

    return (
      <div>
        <div className="container mt-5">
          <SearchForm onSearchHandler={ this.onSearchHandler }/>
        </div>

        { isVisible && <div className="container-fluid mt-5">
          <CardWrap
            movies={ this.state.movies }
          />
        </div> }


        { isVisible && <div className="container mt-5">
          <Pagination count={ this.state.page } page={ this.state.page } onChangePage={ this.onChangePage }/>
        </div> }
      </div>
    );
  }
}

export default HomePage;
