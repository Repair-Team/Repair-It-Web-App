import http from './http-common';

export class RepairsApiService {
    getAll() {
        return http.get('/repairs');
    }

    getDevicesByCustomerId(customerId) {
        return http.get(`/repairs?customerId=${customerId}`);
    }
    getById(id) {
        return http.get(`/repairs/${id}`);
    }

    create(data) {
        return http.post('/repairs', data);
    }

    update(id, data) {
        return http.put(`/repairs/${id}`, data);
    }

    delete(id) {
        return http.delete(`/repairs/${id}`);
    }
}