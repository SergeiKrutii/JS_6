import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { refs } from './api/refs';
import { getImages } from './api/fetch';
import { makeMarcup } from './api/markup';

refs.form.addEventListener('submit', onImageSearch);
console.dir(refs.button);
refs.button.setAttribute('hidden', true)
async function onImageSearch(e) {
    e.preventDefault();
    const inputValue = refs.form.elements.searchQuery.value;
    const pictures = await getImages(inputValue);
    const markup = makeMarcup(pictures);
    if (markup.length === 0) {
      Notify.failure(
        'Sorry, there are no images matching your search query. Please try again.'
      );
    }
    refs.div.insertAdjacentHTML('beforeend', markup);
    refs.button.removeAttribute('hidden');
}