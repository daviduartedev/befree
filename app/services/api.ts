import axios from 'axios';

// Replace with your machine's IP address if testing on a physical device
const API_URL = 'http://192.168.5.97:3000';

const api = axios.create({
    baseURL: API_URL,
});

export default api;
