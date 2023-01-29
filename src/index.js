import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { refs } from './api/refs';
import { makeMarcup } from './api/markup';
import NewImageService from './api/fetch';

refs.form.addEventListener('submit', onImageSearch);
refs.button.addEventListener('click', onLoadMore);
const imageService = new NewImageService();

refs.button.setAttribute('hidden', true);

async function onImageSearch(e) {
  e.preventDefault();

  imageService.query = e.currentTarget.elements.searchQuery.value;

  const pictures = await imageService.fetchImages();
  imageService.resetPage();
  const markup = makeMarcup(pictures);
  if (markup.length === 0) {
    Notify.failure(
      'Sorry, there are no images matching your search query. Please try again.'
    );
  }
  refs.div.insertAdjacentHTML('beforeend', markup);
  refs.button.removeAttribute('hidden');
}

function onLoadMore() {
  imageService.incrementPage();
}
function clearGallery {
  
}