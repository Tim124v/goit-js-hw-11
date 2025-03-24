import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { fetchImages } from './js/pixabay-api.js';
import { renderGallery, clearGallery } from './js/render-functions.js';

const form = document.querySelector('.form');
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const searchQuery = event.target.elements['search-text'].value.trim();
    
    if (!searchQuery) {
        iziToast.show({
            message: 'Please enter a search query',
            messageColor: '#fff',
            backgroundColor: '#EF4040',
            position: 'topRight'
        });
        return;
    }

    clearGallery(gallery);
    loader.classList.remove('is-hidden');

    fetchImages(searchQuery)
        .then(data => {
            if (data.hits.length === 0) {
                iziToast.show({
                    message: 'Sorry, there are no images matching your search query. Please try again.',
                    messageColor: '#fff',
                    backgroundColor: '#EF4040',
                    position: 'topRight'
                });
                return;
            }
            renderGallery(data.hits, gallery);
        })
        .catch(error => {
            iziToast.show({
                message: 'An error occurred while fetching images. Please try again later.',
                messageColor: '#fff',
                backgroundColor: '#EF4040',
                position: 'topRight'
            });
        })
        .finally(() => {
            loader.classList.add('is-hidden');
            event.target.reset();
        });
}); 