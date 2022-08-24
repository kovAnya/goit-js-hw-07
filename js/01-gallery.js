import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");

//створюємо та додаємо розмітку
gallery.insertAdjacentHTML("afterbegin", createMarkup(galleryItems));

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

gallery.addEventListener("click", (ev) => {});
