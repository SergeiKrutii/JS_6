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
  refs.button.setAttribute('hidden', true);
  imageService.query = e.currentTarget.elements.searchQuery.value;
  
  imageService.resetPage();
  (() => {
    refs.div.innerHTML = '';
  })()

  const { hits: pictures, totalHits } = await imageService.fetchImages();
  console.log(pictures);

  if (pictures.length === 0) {
    Notify.failure(
      'Sorry, there are no images matching your search query. Please try again.'
    );
    return;
  }
  checkImageAmount(pictures);

  Notify.info(`Hooray! We found ${totalHits} images.`);

  appendMarcup(pictures);
  console.log('34')
  refs.button.removeAttribute('hidden');
}

async function onLoadMore() {
  imageService.incrementPage();
  const { hits: pictures } = await imageService.fetchImages();
  checkImageAmount();
  appendMarcup(pictures);
}
function appendMarcup(pictures) {
  refs.div.insertAdjacentHTML('beforeend', makeMarcup(pictures));
}
function checkImageAmount(pictures) {
  if (pictures.length < 40) {
    Notify.failure(
      "We're sorry, but you've reached the end of search results."
    );
    refs.button.setAttribute('hidden', true);
    appendMarcup(pictures);
    console.log('check')
    // return;
  }
  return;
}
