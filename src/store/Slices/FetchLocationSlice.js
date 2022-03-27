import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import FetchAPI from '../../API/FetchAPI';

const initialState = {
    fetchCities: {
        data: [],
        status: null,
    },
    fetchCityPoints: {
        data: [],
        status: null,
    },
    mapCenter: {
        center: [54.31, 48.39],
        zoom: 12,
    },
};

export const getCities = createAsyncThunk('fetchCities/getCities', async () => {
    const response = await FetchAPI.getCity();
    return response.data.data;
});
export const getCityPoints = createAsyncThunk('fetchCityPoints/getCityPoints', async (cityId) => {
    const response = await FetchAPI.getCityPoints(cityId);
    return response.data.data;
});
export const getAllPoints = createAsyncThunk('fetchAllPoints/getAllPoints', async () => {
    const response = await FetchAPI.getAllPoints();
    return response.data.data;
});

const FetchLocationSlice = createSlice({
    name: 'fetchLocation',
    initialState,
    reducers: {
        setMapCenter(state, action) {
            state.mapCenter = { ...state.mapCenter, ...action.payload };
        },
        resetFetchLocation(state) {
            return { ...state, ...initialState };
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getCities.pending, (state) => {
            state.fetchCities.status = 'loading';
        });
        builder.addCase(getCities.fulfilled, (state, action) => {
            if (action.payload) {
                state.fetchCities.data = action.payload;
                state.fetchCities.status = 'resolved';
            } else {
                state.fetchCities.status = 'rejected';
            }
        });
        builder.addCase(getCities.rejected, (state) => {
            state.fetchCities.status = 'rejected';
        });

        builder.addCase(getCityPoints.pending, (state) => {
            state.fetchCityPoints.status = 'loading';
        });
        builder.addCase(getCityPoints.fulfilled, (state, action) => {
            if (action.payload) {
                state.fetchCityPoints.data = action.payload;
                state.fetchCityPoints.status = 'resolved';
            } else {
                state.fetchCityPoints.status = 'rejected';
            }
        });
        builder.addCase(getCityPoints.rejected, (state) => {
            state.fetchCityPoints.status = 'rejected';
        });

        builder.addCase(getAllPoints.pending, (state) => {
            state.fetchCityPoints.status = 'loading';
        });
        builder.addCase(getAllPoints.fulfilled, (state, action) => {
            if (action.payload) {
                state.fetchCityPoints.data = action.payload;
                state.fetchCityPoints.status = 'resolved';
            } else {
                state.fetchCityPoints.status = 'rejected';
            }
        });
        builder.addCase(getAllPoints.rejected, (state) => {
            state.fetchCityPoints.status = 'rejected';
        });
    },
});

export const { resetFetchLocation, setMapCenter } = FetchLocationSlice.actions;
export default FetchLocationSlice.reducer;