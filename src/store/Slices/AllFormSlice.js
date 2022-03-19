import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    city: {},
    point: {},
    carClass: {},
    car: {},
    color: '',
    dateFrom: '',
    dateTo: '',
    rentTime: '',
    tariff: {},
    extraServices: [
        {
            id: 0,
            title: 'Полный бак, 500р',
            value: 'Полный бак',
            checked: false,
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
    totalPrice: 0,
};

export const AllFormSlice = createSlice({
    name: 'allForm',
    initialState,
    reducers: {
        setCity(state, action) {
            state.city = { ...state.city, ...action.payload };
        },
        setPoint(state, action) {
            state.point = { ...state.point, ...action.payload };
        },
        resetPoint(state) {
            return { ...state, ...initialState, city: state.city };
        },
        setCarClass(state, action) {
            state.carClass = action.payload;
        },
        setCar(state, action) {
            state.car = action.payload;
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
        setRentTime(state, action) {
            state.rentTime = action.payload;
        },
        setTariff(state, action) {
            state.tariff = action.payload;
        },
        setExtraServices(state, action) {
            state.extraServices = state.extraServices.map((service) =>
                service.id === action.payload ? { ...service, checked: !service.checked } : service
            );
        },
        resetExtraServices(state) {
            state.extraServices = initialState.extraServices;
        },
        setTotatalPrice(state, action) {
            state.totalPrice = action.payload;
        },
        resetForm(state) {
            return { ...state, ...initialState };
        },
    },
});

export const {
    setCity,
    setPoint,
    resetPoint,
    setCarClass,
    setCar,
    setColor,
    setDateFrom,
    setDateTo,
    setRentTime,
    setTariff,
    setExtraServices,
    setTotatalPrice,
    resetExtraServices,
    resetForm,
} = AllFormSlice.actions;

export default AllFormSlice.reducer;
