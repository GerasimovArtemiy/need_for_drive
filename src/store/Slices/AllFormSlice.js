import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    city: '',
    point: '',
    carClass: 'Все модели',
    cars: '',
    color: 'Любой',
    dateFrom: '',
    dateTo: '',
    tariff: 'На сутки, 1999Р/сутки',
    extraServices: [
        {
            id: 0,
            title: 'Полный бак, 500р',
            value: 'Полный бак',
            checked: true,
        },
        {
            id: 1,
            title: 'Детское кресло, 200р',
            value: 'Детское кресло',
            checked: false,
        },
        {
            id: 2,
            title: 'Правый руль, 1600р',
            value: 'Правый руль',
            checked: false,
        },
    ],
};

export const AllFormSlice = createSlice({
    name: 'allForm',
    initialState,
    reducers: {
        setCity(state, action) {
            state.city = action.payload;
        },
        setPoint(state, action) {
            state.point = action.payload;
        },
        setСarClass(state, action) {
            state.carClass = action.payload;
        },
        setCars(state, action) {
            state.cars = action.payload;
        },
        setColor(state, action) {
            state.color = action.payload;
        },
        setDateFrom(state, action) {
            state.dateFrom = action.payload;
        },
        setDateTo(state, action) {
            state.dateTo = action.payload;
        },
        setTariff(state, action) {
            state.tariff = action.payload;
        },
        setExtraServices(state, action) {
            state.extraServices = state.extraServices.map((service) =>
                service.id === action.payload ? { ...service, checked: !service.checked } : service
            );
        },
        resetForm(state) {
            return { ...state, ...initialState };
        },
    },
});

export const {
    setCity,
    setPoint,
    setСarClass,
    setCars,
    setColor,
    setDateFrom,
    setDateTo,
    setTariff,
    setExtraServices,
    resetForm,
} = AllFormSlice.actions;

export default AllFormSlice.reducer;
