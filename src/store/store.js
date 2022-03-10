import { configureStore } from '@reduxjs/toolkit';
import ValidPageReducer from './Slices/ValidPageSlice';
import AllFormReducer from './Slices/AllFormSlice';

export default configureStore({
    reducer: {
        validPage: ValidPageReducer,
        allForm: AllFormReducer,
    },
});
