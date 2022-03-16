import { configureStore } from '@reduxjs/toolkit';
import ValidPageReducer from './Slices/ValidPageSlice';
import AllFormReducer from './Slices/AllFormSlice';
import FetchLocationReducer from './Slices/FetchLocationSlice';

export default configureStore({
    reducer: {
        validPage: ValidPageReducer,
        allForm: AllFormReducer,
        fetchLocation: FetchLocationReducer,
    },
});
