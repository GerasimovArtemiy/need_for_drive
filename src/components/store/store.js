import { configureStore } from '@reduxjs/toolkit';
import ValidPageReducer from './Slices/ValidPageSlice';

export default configureStore({
    reducer: {
        validPage: ValidPageReducer,
    },
});
