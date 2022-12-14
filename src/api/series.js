import axios from 'axios';
export default class SeriesApi {
  async BuscarTodasAsSeries() {
    const response = await axios.get(
      "https://api.themoviedb.org/3/tv/popular?api_key=4f2d6721f9937522fb8b76dbac0eab07&language=pt-BR&page=1"
    );
    return response.data.results;
  }
  async BuscarSeriesPorGenero(genero) {
    const response = await axios.get(
      `https://api.themoviedb.org/3/genre/tv/list?api_key=df0a1976ab5aa969146a8dbff08f0123&language=pt-BR&page=1&with_genres=${genero}`
    );
    return response.data.results;
  }
}