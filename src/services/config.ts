import axios from 'axios';

export const BASE_URL = 'https://api.airtable.com/v0/appdpf7By5zmgmYOI';

export const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_API_TOKEN}`,
  }
});
