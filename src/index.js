import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { refs } from './api/refs';
import { makeMarcup } from './api/markup';
import NewImageService from './api/fetch';

refs.form.addEventListener('submit', onImageSearch);
refs.button.addEventListener('click', onButtonClick);
const imageService = new NewImageService();

refs.button.setAttribute('hidden', true);

async function onImageSearch(e) {
  e.preventDefault();

  imageService.query = e.currentTarget.elements.searchQuery.value;
  if (NewImageService.query === '') {
    return alert('clear')
  }
  const pictures = await imageService.fetchImages();
  console.log(pictures)
  const markup = makeMarcup(pictures);
  if (markup.length === 0) {
    Notify.failure(
      'Sorry, there are no images matching your search query. Please try again.'
    );
  }
  refs.div.insertAdjacentHTML('beforeend', markup);
  refs.button.removeAttribute('hidden');
}

function onButtonClick() {
  paginatinon += 1;
}
