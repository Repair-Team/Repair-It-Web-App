import http from './http-common';

export class DevicesApiService {
    getAll() {
        return http.get('/devices');
    }
    getDevices() {
        return http.get('/devices');
    }
    getDevicesByUserId(userId) {
        return http.get(`/devices?userId=${userId}`);
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
}