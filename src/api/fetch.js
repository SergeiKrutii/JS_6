const axios = require('axios').default;
const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '?key=33125565-bcbdb194cdd5c3277aaf5f84a&';
const params =
  'image_type=photo&orientation=horizontal&safesearch=true&per_page=40';

export default class NewImageService {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
  }

  async fetchImages() {
    try {
      const response = await axios.get(
        `${BASE_URL}${API_KEY}q=${this.searchQuery}&${params}&page=${this.page}`
      );
      const data = response.data;

      return data;
    } catch (error) {
      console.error(error);
    }
  }
  incrementPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }

  get query() {
    return this.searchQuery;
  }
  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}
// async function fetchImages(inputValue) {
//   try {
//     const response = await axios.get(
//       `${BASE_URL}${API_KEY}q=${inputValue}&${params}`
//     );
//     const data = response.data.hits;
//     console.log(data);
//     return data;
//   } catch (error) {
//     console.error(error);
//   }
// }

// export { getImages };
