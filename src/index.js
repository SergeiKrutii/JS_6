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
  
  // (() => {
  //   refs.div.insertAdjacentHTML = ' ';
  // })()

  imageService.query = e.currentTarget.elements.searchQuery.value;
  imageService.resetPage();

  const pictures = await imageService.fetchImages();
  if (pictures.length === 0) {
    Notify.failure(
      'Sorry, there are no images matching your search query. Please try again.'
    );
    return;
  }
  appendMarcup(pictures);
  refs.button.removeAttribute('hidden');
}

async function onLoadMore() {
  imageService.incrementPage();
  const pictures = await imageService.fetchImages();
  console.log(pictures);
  appendMarcup(pictures);
}

function appendMarcup(pictures) {
  refs.div.insertAdjacentHTML('beforeend', makeMarcup(pictures));
}
