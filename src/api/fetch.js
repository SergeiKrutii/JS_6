const axios = require('axios').default;
const BASE_URL =
  'https://pixabay.com/api/?key=33125565-bcbdb194cdd5c3277aaf5f84a&';
const params = 'image_type=photo&orientation=horizontal&safesearch=true&per_page=12';

async function getImages(inputValue) {
  try {
    const response = await axios.get(`${BASE_URL}q=${inputValue}&${params}`);
    const data = response.data.hits;
    return data;
  } catch (error) {
    console.error(error);
  }
}

export { getImages };
