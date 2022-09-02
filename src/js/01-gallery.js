import { galleryItems } from "./gallery-items.js";

const galleryBox = document.querySelector(".gallery");

const createGalleryItem = ({ preview, original, description }) =>
    `<a class="gallery__item" href="${original}" style="border-radius:16px">
  <img class="gallery__image" src="${preview}" alt="${description}" title="${description}"/>
</a>`;
const galleryMarkup = galleryItems.reduce(
    (acc, item) => acc + createGalleryItem(item),
    ""
);

galleryBox.insertAdjacentHTML("beforeend", galleryMarkup);

galleryBox.addEventListener("click", onGalleryContainer);

function onGalleryContainer(event) {
    event.preventDefault();
}
new SimpleLightbox(".gallery a", {
    enableKeyboard: true,
    captionDelay: 250,
});