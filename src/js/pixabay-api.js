import axios from 'axios';

export function fetchImages(searchQuery) {
    const API_KEY = '49429251-c344791abe1bae313073c39aa';
    const BASE_URL = 'https://pixabay.com/api/';
    
    const searchParams = {
        key: API_KEY,
        q: searchQuery,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        per_page: 40
    };

    return axios.get(BASE_URL, { params: searchParams })
        .then(response => response.data)
        .catch(() => {
            throw new Error('Failed to fetch images from Pixabay');
        });
}
