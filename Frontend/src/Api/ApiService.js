import axios from 'axios';


const api = axios.create({
    baseURL:"http://localhost:8080",
})

export const apiTesting = () => api.get('/test');

export const latestOffer = () => api.get('/products/get_latest_offer_product');

