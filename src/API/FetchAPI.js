import axios from 'axios';
import { baseUrl, applicationId, pathAPI } from './constants';

const responseAPI = axios.create({
    baseURL: baseUrl,
    headers: { 'X-Api-Factory-Application-Id': applicationId, 'Content-Type': 'application/json' },
});

export default class FetchAPI {
    static async getCity() {
        return responseAPI.get(pathAPI.city);
    }

    static async getAllPoints() {
        return responseAPI.get(pathAPI.point);
    }

    static async getCityPoints(cityId) {
        return responseAPI.get(`${pathAPI.cityPoints}${cityId}`);
    }

    static async getcarClass() {
        return responseAPI.get(pathAPI.carClass);
    }

    static async getCars() {
        return responseAPI.get(pathAPI.cars);
    }

    static async getCarsByClass(id) {
        return responseAPI.get(`${pathAPI.сarsByClass}${id}`);
    }
}
