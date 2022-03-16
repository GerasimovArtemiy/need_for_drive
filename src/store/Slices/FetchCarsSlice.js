import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import FetchAPI from '../../API/FetchAPI';

const initialState = {
    carClass: {
        data: [],
        status: null,
    },
    cars: {
        data: [],
        status: null,
    },
};

export const getCarClass = createAsyncThunk('carClass/getCarClass', async () => {
    const response = await FetchAPI.getCarClass();
    return response.data.data;
});
export const getCars = createAsyncThunk('cars/getCars', async () => {
    const response = await FetchAPI.getCars();
    return response.data.data;
});
export const getCarsByClass = createAsyncThunk('cars/getCarsByClass', async (id) => {
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
        builder.addCase(getCarClass.pending, (state) => {
            state.carClass.status = 'loading';
        });
        builder.addCase(getCarClass.fulfilled, (state, action) => {
            if (action.payload) {
                state.carClass.data = action.payload;
                state.carClass.status = 'resolved';
            } else {
                state.carClass.status = 'rejected';
            }
        });
        builder.addCase(getCarClass.rejected, (state) => {
            state.carClass.status = 'rejected';
        });

        builder.addCase(getCars.pending, (state) => {
            state.cars.status = 'loading';
        });
        builder.addCase(getCars.fulfilled, (state, action) => {
            if (action.payload) {
                state.cars.data = action.payload;
                state.cars.status = 'resolved';
            } else {
                state.cars.status = 'rejected';
            }
        });
        builder.addCase(getCars.rejected, (state) => {
            state.cars.status = 'rejected';
        });

        builder.addCase(getCarsByClass.pending, (state) => {
            state.cars.status = 'loading';
        });
        builder.addCase(getCarsByClass.fulfilled, (state, action) => {
            if (action.payload) {
                state.cars.data = action.payload;
                state.cars.status = 'resolved';
            } else {
                state.cars.status = 'rejected';
            }
        });
        builder.addCase(getCarsByClass.rejected, (state) => {
            state.cars.status = 'rejected';
        });
    },
});

export default FetchCarsSlice.reducer;
