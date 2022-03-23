import { configureStore } from '@reduxjs/toolkit';
import ValidPageReducer from './Slices/ValidPageSlice';
import AllFormReducer from './Slices/AllFormSlice';
import FetchDataReducer from './Slices/FetchDataSlice';

export default configureStore({
    reducer: {
        validPage: ValidPageReducer,
        allForm: AllFormReducer,
        fetchData: FetchDataReducer,
    },
});
