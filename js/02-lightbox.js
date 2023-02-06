import { galleryItems } from './gallery-items.js';
// Change code below this line


//знайти
const gallery = document.querySelector('.gallery')
//розмітка у змінній
const newElement = createElem(galleryItems);
//додати розмітку після галереї
gallery.insertAdjacentHTML('beforeend', newElement);

//функція рендеру масиву обєктів та створення розмітки
  function createElem(item){
    return item.map(({ preview, original, description })=>{
        return `<li>
      <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
</li>`
  }).join('');
  }

const lightbox = new SimpleLightbox('.gallery a', { 
    captionsData: 'alt', 
    captionPosition: 'bottom',
    captionDelay: 250
 });
