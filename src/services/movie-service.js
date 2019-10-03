class MovieService {

  _apiBase = 'http://omdbapi.com/?apikey=5b411c37&';

  getResource = async (url) => {
    const res = await fetch(url);
    if(!res.ok) {
      throw new Error(`Not fetch ${ url }, status ${ res.status }`);
    }
    return await res.json();
  };

  getAllMovies = async (name) => {
    return await this.getResource(`${this._apiBase}s=${ name }`);
  };

  getMovieInfo = async (id) => {
    const movie = await this.getResource(`${this._apiBase}i=${ id }&plot=full`);
    return this._transformInfo(movie);
  };

  _transformInfo = (movie) => {
    return {
      Title: movie.Title,
      Runtime: movie.Runtime,
      Genre: movie.Genre,
      Awards: movie.Awards,
      Plot: movie.Plot
    }
  };
}

export default MovieService;