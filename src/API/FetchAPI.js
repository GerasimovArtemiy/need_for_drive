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

    static async getCityPoint(cityId) {
        return responseAPI.get(`${pathAPI.cityPoint}${cityId}`);
    }
}
