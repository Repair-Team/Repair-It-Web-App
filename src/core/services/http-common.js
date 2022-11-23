import axios from 'axios';

export default axios.create({
    baseURL: 'http://jcayllahua-001-site1.dtempurl.com/api/v1',
    headers: { 'Content-type': 'application/json' }
});