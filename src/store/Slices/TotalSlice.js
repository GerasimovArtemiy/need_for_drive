import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    orderModal: false,
};

const TotalSlice = createSlice({
    name: 'totalStep',
    initialState,
    reducers: {
        setOrderModal(state, action) {
            state.orderModal = action.payload;
        },
    },
});

export const { setOrderModal } = TotalSlice.actions;
export default TotalSlice.reducer;
