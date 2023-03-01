import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { featchImages } from './api';
import { enterImages } from './render';
import { galeryEl, inputEl, formEl, btnLoadMore } from './elemens';

let page = 1;
let query;
const btnSearech = async e => {
  e.preventDefault();
  query = e.target.elements.searchQuery.value;
  page = 1;
  const data = await featchImages(query, page);
  galeryEl.innerHTML = '';
  console.log(data);
  if (data.total === 0) {
    Notify.info(
      'Sorry, there are no images matching your search query. Please try again.'
    );
    btnLoadMore.style.display = 'none';
    return;
  }
  enterImages(data.hits);
  btnLoadMore.style.display = 'block';
  // const { totalHits, hits } = await
};

formEl.addEventListener('submit', btnSearech);
btnLoadMore.addEventListener('click', btnLoading);

async function btnLoading() {
  page += 1;
  const data = await featchImages(query, page);
  const totalPages = Math.ceil(data.totalHits / 40);
  if (page < totalPages) {
    btnLoadMore.style.display = 'block';
  } else {
    btnLoadMore.style.display = 'none';
    Notify.failure(
      "We're sorry, but you've reached the end of search results."
    );
  }
  enterImages(data.hits);
}
