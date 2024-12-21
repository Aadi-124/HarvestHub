import axios from 'axios';

const BASE_URL = 'http://localhost:8080/api';

const api = axios.create({
    BASE_URL:"http://localhost:8080",
})

export const apiTesting = () => api.get('/test');

