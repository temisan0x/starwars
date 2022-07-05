import axios from 'axios';

export const swapi = axios.create({
    baseURL: "//swapi.dev/api/",
});