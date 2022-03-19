import { configureStore } from '@reduxjs/toolkit';
import ValidPageReducer from './Slices/ValidPageSlice';
import AllFormReducer from './Slices/AllFormSlice';
import FetchLocationReducer from './Slices/FetchLocationSlice';
import FetchCarsReducer from './Slices/FetchCarsSlice';
import FetchMoreReducer from './Slices/fetchMoreSlice';
import TotalStepReducer from './Slices/TotalSlice';

export default configureStore({
    reducer: {
        validPage: ValidPageReducer,
        allForm: AllFormReducer,
        fetchLocation: FetchLocationReducer,
        fetchCars: FetchCarsReducer,
        fetchMore: FetchMoreReducer,
        totalStep: TotalStepReducer,
    },
});
