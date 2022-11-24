import axios from 'axios';

export default axios.create({
    //baseURL: 'http://jcayllahua-001-site1.dtempurl.com/api/v1',
    baseURL: 'http://localhost:3000/api/v1',
    headers: { 'Content-type': 'application/json' }
});