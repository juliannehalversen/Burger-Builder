import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-builder-203c3.firebaseio.com/'
});

export default instance;