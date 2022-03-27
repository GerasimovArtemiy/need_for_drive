import axios from 'axios';
import { baseUrl, applicationId } from './constants';
import APILinks from './APILinks';

const responseAPI = axios.create({
    baseURL: baseUrl,
    headers: { 'X-Api-Factory-Application-Id': applicationId, 'Content-Type': 'application/json' },
});

export default class FetchAPI {
    static async getCity() {
        return responseAPI.get(APILinks.city);
    }

    static async getAllPoints() {
        return responseAPI.get(APILinks.point);
    }

    static async getCityPoints(cityId) {
        return responseAPI.get(`${APILinks.cityPoints}${cityId}`);
    }

    static async getCarClass() {
        return responseAPI.get(APILinks.carClass);
    }

    static async getCars() {
        return responseAPI.get(APILinks.cars);
    }

    static async getCarsByClass(id) {
        return responseAPI.get(`${APILinks.сarsByClass}${id}`);
    }

    static async getFetchTariff() {
        return responseAPI.get(APILinks.tariff);
    }

    static async postOrder(order) {
        return responseAPI.post(APILinks.order, { ...order });
    }

    static async getOrderById(orderId) {
        return responseAPI.get(`${APILinks.order}${orderId}`);
    }

    static async deleteOrder(order) {
        return responseAPI.put(`${APILinks.order}${order.id}`, {
            ...order,
            orderStatusId: { name: 'Отмененые', id: '5e26a1f5099b810b946c5d8c' },
        });
    }
}
