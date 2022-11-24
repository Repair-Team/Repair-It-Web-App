import http from './http-common';

export class ReportsApiService {
    getAll() {
        return http.get('/reports');
    }
    getRepairs() {
        return http.get('/reports');
    }

    getReportsByDeviceId(deviceId) {
        return http.get(`/reports?deviceId=${deviceId}`);
    }
    getReportsByCustomerId(customerId) {
        return http.get(`/reports?customerId=${customerId}`);
    }
    getReportsByTechnicianId(technicianId) {
        return http.get(`/reports?technicianId=${technicianId}`);
    }
    getById(id) {
        return http.get(`/reports/${id}`);
    }

    create(data) {
        return http.post('/reports', data);
    }

    update(id, data) {
        return http.put(`/reports/${id}`, data);
    }

    delete(id) {
        return http.delete(`/reports/${id}`);
    }
}