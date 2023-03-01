import { galeryEl } from './elemens';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

let gallery = new SimpleLightbox('.gallery a');
export function enterImages(images) {
  const markup = images
    .map(
      ({ previewURL, likes, views, comments, downloads, largeImageURL }) =>
        `    <div class="photo-card">
  <a href="${largeImageURL}"><img src="${previewURL}" alt="" loading="lazy" /></a>
  <div class="info">
    <p class="info-item">
      <b>Likes${likes}</b>
    </p>
    <p class="info-item">
      <b>Views${views}</b>
    </p>
    <p class="info-item">
      <b>Comments${comments}</b>
    </p>
    <p class="info-item">
      <b>Downloads${downloads}</b>
    </p>
  </div>
  </div>`
    )
    .join('');
  galeryEl.insertAdjacentHTML('beforeend', markup);
  gallery.refresh();
}
