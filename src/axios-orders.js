import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://explore-diagnostics.firebaseio.com/'
});

export default instance;