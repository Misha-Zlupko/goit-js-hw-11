import axios from 'axios';
import { perPage } from './elemens.js';
const BASE_URL = `https://pixabay.com/api/`;
export async function featchImages(query, page) {
  const { data } = await axios
    .get(
      `${BASE_URL}?key=33984923-dc45a9a53eac0b81e2d5e1fe7&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&${perPage}&page=${page}`
    )
    .catch(error => {
      console.log(error);
    });
  return data;
}
