import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");
let instance = null;

gallery.insertAdjacentHTML("afterbegin", createMarkup(galleryItems));
gallery.addEventListener("click", onClick);

function createMarkup(galleryItems) {
  const markup = galleryItems.map(({ preview, original, description }) => {
    return `
  <div class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </div>`;
  });
  return markup.join("");
}

function onClick(event) {
  event.preventDefault();
  const bigImgUrl = event.target.dataset.source;
  instance = basicLightbox.create(`<img src=${bigImgUrl} width="1280">`);
  instance.show();
  gallery.addEventListener("keydown", onEsc);
}

function onEsc(event) {
  if (event.key !== "Escape") {
    return;
  }
  instance.close(() => {
    gallery.removeEventListener("keydown", onEsc);
  });
}
