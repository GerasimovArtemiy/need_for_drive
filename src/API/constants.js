export const baseUrl = process.env.REACT_APP_BASE_URL;
export const applicationId = process.env.REACT_APP_APPLICATION_ID;
export const secret = process.env.REACT_APP_SECRET;
export const yandexMapKey = process.env.REACT_APP_YANDEX_API_KEY;

export const pathAPI = {
    city: 'db/city',
    point: 'db/point',
    cityPoints: 'db/point?cityId=',
    carClass: 'db/category',
    cars: 'db/car',
    сarsByClass: 'db/category?categoryId=',
};
