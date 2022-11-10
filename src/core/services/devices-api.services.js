import http from './http-common';

export class DevicesApiService {
    getAll() {
        return http.get('/devices');
    }

    getById(id) {
        return http.get(`/devices/${id}`);
    }

    create(data) {
        return http.post('/devices', data);
    }

    update(id, data) {
        return http.put(`/devices/${id}`, data);
    }

    delete(id) {
        return http.delete(`/devices/${id}`);
    }

    /*findByTitle(title) {
        return http.get(`/devices?title=${title}`);
    }*/
}