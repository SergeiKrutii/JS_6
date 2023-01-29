import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { refs } from './api/refs';
import { makeMarcup } from './api/markup';
import NewImageService from './api/fetch';

refs.form.addEventListener('submit', onImageSearch);
refs.button.addEventListener('click', onButtonClick);
const NewImageService = new NewImageService();

refs.button.setAttribute('hidden', true);

async function onImageSearch(e) {
  e.preventDefault();

  console.log(NewImageService)
  // NewImageService.query = e.currentTarget.elements.searchQuery.value;
  // if (NewImageService.query === '') {
  //   return alert('clear')
  // }
  // const images = await NewImageService.fetchImages();
  // const pictures = NewImageService.fetchImages();
  // const markup = makeMarcup(pictures);
  // console.log(pictures);
  // if (markup.length === 0) {
  //   Notify.failure(
  //     'Sorry, there are no images matching your search query. Please try again.'
  //   );
  // }
  // refs.div.insertAdjacentHTML('beforeend', markup);
  refs.button.removeAttribute('hidden');
}

function onButtonClick() {
  paginatinon += 1;
}
