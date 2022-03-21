import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import FetchAPI from '../../API/FetchAPI';

const initialState = {
    fetchTariff: {
        data: [],
        status: null,
    },
};

export const getFetchTariff = createAsyncThunk('fetchTariff/getFetchTariff', async () => {
    const response = await FetchAPI.getFetchTariff();
    return response.data.data;
});

const FetchMoreSlice = createSlice({
    name: 'fetchMore',
    initialState,
    reducers: {
        resetFetchMore(state) {
            return { ...state, ...initialState };
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getFetchTariff.rejected, (state) => {
            state.fetchTariff.status = 'rejected';
        });
        builder.addCase(getFetchTariff.fulfilled, (state, action) => {
            if (action.payload) {
                state.fetchTariff.data = action.payload;
                state.fetchTariff.status = 'resolved';
            } else {
                state.fetchTariff.status = 'rejected';
            }
        });
        builder.addCase(getFetchTariff.pending, (state) => {
            state.fetchTariff.status = 'loading';
        });
    },
});

export const { resetFetchMore } = FetchMoreSlice.actions;
export default FetchMoreSlice.reducer;
