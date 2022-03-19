import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import FetchAPI from '../../API/FetchAPI';

const initialState = {
    fetchClass: {
        data: [],
        status: null,
    },
    fetchCars: {
        data: [],
        status: null,
    },
};

export const getFetchClass = createAsyncThunk('fetchClass/getFetchClass', async () => {
    const response = await FetchAPI.getCarClass();
    return response.data.data;
});
export const getFetchCars = createAsyncThunk('fetchCars/getFetchCars', async () => {
    const response = await FetchAPI.getCars();
    return response.data.data;
});
export const getCarsByClass = createAsyncThunk('fetchCars/getCarsByClass', async (id) => {
    const response = await FetchAPI.getCarsByClass(id);
    return response.data.data;
});

const FetchCarsSlice = createSlice({
    name: 'fetchCars',
    initialState,
    reducers: {
        resetFetchCar(state) {
            return { ...state, ...initialState };
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getFetchClass.pending, (state) => {
            state.fetchClass.status = 'loading';
        });
        builder.addCase(getFetchClass.fulfilled, (state, action) => {
            if (action.payload) {
                state.fetchClass.data = action.payload;
                state.fetchClass.status = 'resolved';
            } else {
                state.fetchClass.status = 'rejected';
            }
        });
        builder.addCase(getFetchClass.rejected, (state) => {
            state.fetchClass.status = 'rejected';
        });

        builder.addCase(getFetchCars.pending, (state) => {
            state.fetchCars.status = 'loading';
        });
        builder.addCase(getFetchCars.fulfilled, (state, action) => {
            if (action.payload) {
                state.fetchCars.data = action.payload;
                state.fetchCars.status = 'resolved';
            } else {
                state.fetchCars.status = 'rejected';
            }
        });
        builder.addCase(getFetchCars.rejected, (state) => {
            state.fetchCars.status = 'rejected';
        });

        builder.addCase(getCarsByClass.pending, (state) => {
            state.fetchCars.status = 'loading';
        });
        builder.addCase(getCarsByClass.fulfilled, (state, action) => {
            if (action.payload) {
                state.fetchCars.data = action.payload;
                state.fetchCars.status = 'resolved';
            } else {
                state.fetchCars.status = 'rejected';
            }
        });
        builder.addCase(getCarsByClass.rejected, (state) => {
            state.fetchCars.status = 'rejected';
        });
    },
});

export default FetchCarsSlice.reducer;
