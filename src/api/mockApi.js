import axios from "axios";

export const api = axios.create({
    baseURL: 'https://68c7ac295d8d9f51473284f1.mockapi.io/',
    headers: {'content-type': 'application/json'},
    timeout: 10000,
});