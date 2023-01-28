import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { refs } from './api/refs';
import { getImages } from './api/fetch';
import { makeMarcup } from './api/markup';

refs.form.addEventListener('submit', onImageSearch);

async function onImageSearch(e) {
    e.preventDefault();
    const inputValue = refs.form.elements.searchQuery.value;
    const pictures = await getImages(inputValue);
    const markup = makeMarcup(pictures);
    refs.div.insertAdjacentHTML('beforeend', markup);
}