import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

let lightbox = null;

export function renderGallery(images, galleryContainer) {
    const markup = images.map(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => `
        <li class="gallery-item">
            <a class="gallery-link" href="${largeImageURL}">
                <img 
                    class="gallery-image loading" 
                    src="${webformatURL}" 
                    alt="${tags}"
                    loading="lazy"
                    onload="this.classList.remove('loading')"
                />
                <div class="image-info">
                    <p class="info-item">
                        <b>Likes</b>
                        <span>${likes}</span>
                    </p>
                    <p class="info-item">
                        <b>Views</b>
                        <span>${views}</span>
                    </p>
                    <p class="info-item">
                        <b>Comments</b>
                        <span>${comments}</span>
                    </p>
                    <p class="info-item">
                        <b>Downloads</b>
                        <span>${downloads}</span>
                    </p>
                </div>
            </a>
        </li>
    `).join('');

    galleryContainer.innerHTML = markup;
    
    if (!lightbox) {
        lightbox = new SimpleLightbox('.gallery a', {
            captionsData: 'alt',
            captionDelay: 250,
        });
    }
    lightbox.refresh();
}

export function clearGallery(galleryContainer) {
    galleryContainer.innerHTML = '';
}
