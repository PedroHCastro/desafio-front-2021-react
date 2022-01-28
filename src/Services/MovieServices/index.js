import { api } from "../api";
import { formatDate } from "../../utils";

export async function getMovies() {
  const response = await api.get(
    "/movie/popular?api_key=ff7205d949c40dcb9fc509d150c9a07f&language=pt-BR"
  );
  const data = response.data;
  const value = () => parseFloat((Math.random() * (99 - 15) + 15).toFixed(2));
  const preparedData = data.results.map((result) => {
    result.value = value();
    result.count = 1;
    result.release_date = formatDate(result.release_date);
    return result;
  });
  return preparedData;
}

export async function getMoviesBySearch(params) {
  const response = await api.get(
    `/search/movie?api_key=ff7205d949c40dcb9fc509d150c9a07f&language=pt-BR&query=${params}`
  );
  const data = response.data;
  const value = () => parseFloat((Math.random() * (99 - 15) + 15).toFixed(2));
  const preparedData = data.results.map((result) => {
    result.value = value();
    result.count = 1;
    result.release_date = formatDate(result.release_date);
    return result;
  });
  return preparedData;
}

export async function getGenres(params) {
  const response = await api.get(
    "genre/movie/list?api_key=ff7205d949c40dcb9fc509d150c9a07f&language=pt-BR"
  );
  const data = response.data;
  return data;
}
