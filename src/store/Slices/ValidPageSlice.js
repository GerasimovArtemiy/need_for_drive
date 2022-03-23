import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    locationStep: true,
    carStep: false,
    moreStep: false,
    totalStep: false,
};

const ValidPageSlice = createSlice({
    name: 'validPage',
    initialState,
    reducers: {
        setLocationStep(state, action) {
            state.locationStep = action.payload;
        },
        setCarStep(state, action) {
            state.carStep = action.payload;
        },
        setMoreStep(state, action) {
            state.moreStep = action.payload;
        },
        setTotalStep(state, action) {
            state.totalStep = action.payload;
        },
        resetValidPage(state) {
            return { ...state, ...initialState };
        },
    },
});

export const { setLocationStep, setCarStep, setMoreStep, setTotalStep, resetValidPage } = ValidPageSlice.actions;

export default ValidPageSlice.reducer;
