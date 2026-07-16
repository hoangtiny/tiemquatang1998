import axios from 'axios';

// WordPress REST API Base URL
const API_BASE_URL = 'http://localhost/tiem1998vn/wp-json/wp/v2';
const WOO_API_BASE_URL = 'http://localhost/tiem1998vn/wp-json/wc/store/v1'; // WooCommerce Store API

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const wooApi = axios.create({
  baseURL: WOO_API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
