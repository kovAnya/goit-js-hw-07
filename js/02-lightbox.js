import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");

gallery.insertAdjacentHTML("afterbegin", createMarkup(galleryItems));

const lightbox = new SimpleLightbox(".gallery a", {
  /* options */
  captions: true,
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
});

function createMarkup(galleryItems) {
  const markup = galleryItems.map(({ preview, original, description }) => {
    return `
  <div class="gallery__item">
    <a class="gallery__item" href="${original}">
       <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>
  </div>`;
  });
  return markup.join("");
}
