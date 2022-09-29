import http from '../../core/services/http-common';
export class DevicesApiService {
    getAll() {
        return http.get('/devices');
    }
    getModels(){
        return http.get('/deviceModels')
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
    findByModelId(modelId) {
        return http.get(`/devices?modelId=${modelId}`);
    }
}