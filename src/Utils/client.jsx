import axios from "axios";

const client = axios.create({
    baseURL: 'https://api.hadith.gading.dev'
});

export default client;