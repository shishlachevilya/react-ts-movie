class MovieService {
  async getResource(url) {
    const res = await fetch(url);
    if(!res.ok) {
      throw new Error(`Not fetch ${url}, status ${res.status}`);
    }
    return await res.json();
  }

  getAllMovies = async (name) => {
    return await this.getResource(`https://omdbapi.com//?s=${name}&apikey=5b411c37`);
  }
}

export default MovieService;
