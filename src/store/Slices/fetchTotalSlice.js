import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import FetchAPI from '../../API/FetchAPI';

const initialState = {
    order: {
        status: null,
        data: {},
    },
};
export const postOrder = createAsyncThunk('order/postOrder', async (order) => {
    const response = await FetchAPI.postOrder(order);
    return response.data.data;
});
export const getOrderById = createAsyncThunk('order/getOrderById', async (orderId) => {
    const response = await FetchAPI.getOrderById(orderId);
    return response.data.data;
});

const fetchTotalSlice = createSlice({
    name: 'fetchTotal',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(postOrder.pending, (state) => {
            state.order.status = 'loading';
        });
        builder.addCase(postOrder.fulfilled, (state, action) => {
            if (action.payload) {
                state.order.data = action.payload;
                state.order.status = 'resolved';
            } else {
                state.order.status = 'rejected';
            }
        });
        builder.addCase(postOrder.rejected, (state) => {
            state.order.status = 'rejected';
        });

        builder.addCase(getOrderById.pending, (state) => {
            state.order.status = 'loading';
        });
        builder.addCase(getOrderById.fulfilled, (state, action) => {
            if (action.payload) {
                state.order.data = action.payload;
                state.order.status = 'resolved';
            } else {
                state.order.status = 'rejected';
            }
        });
        builder.addCase(getOrderById.rejected, (state) => {
            state.order.status = 'rejected';
        });
    },
});
export default fetchTotalSlice.reducer;
