// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);


import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const gallerySmallImg = document.querySelector('.gallery');



const markup = galleryItems.map(({preview, original, description}) =>
`<li class="gallery__item">
<a class="gallery__link" href="${original}">
   <img class="gallery__image" src="${preview}" alt="${description}"/>
</a>
</li>` ).join('');

gallerySmallImg.insertAdjacentHTML('beforeend', markup);

// gallerySmallImg.style.list-style = "none"

console.log(SimpleLightbox);

new SimpleLightbox('.gallery__item a', {
  captionsData:'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
  docClose: 'true'
});
