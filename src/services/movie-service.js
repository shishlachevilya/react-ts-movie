class MovieService {

  _apiBase = 'https://omdbapi.com/?apikey=5b411c37';

  getResource = async (url) => {
    const res = await fetch(url);
    if(!res.ok) {
      throw new Error(`Not fetch ${ url }, status ${ res.status }`);
    }
    return await res.json();
  };

  getAllMovies = async (name) => {
    return await this.getResource(`${ this._apiBase }&s=${ name }`);
  };

  changePage = async (name, number) => {
    return await this.getResource(`${ this._apiBase }&s=${ name }&page=${number}`);
  };

  getMovieInfo = async (id) => {
    const movie = await this.getResource(`${ this._apiBase }&i=${ id }&plot=full`);
    return this._transformInfo(movie);
  };

  _transformInfo = (movie) => {
    return {
      Poster: movie.Poster,
      Title: movie.Title,
      Year: movie.Year,
      Awards: movie.Awards,
      imdbRating: movie.imdbRating,
      imdbVotes: movie.imdbVotes,
      Actors: movie.Actors,
      Country: movie.Country,
      Runtime: movie.Runtime,
      Genre: movie.Genre,
      Plot: movie.Plot
    }
  };
}

export default MovieService;
