import { configureStore } from '@reduxjs/toolkit';
import notificationReducer from './slices/notificationSlice';

export default configureStore({
    reducer: {
        notification: notificationReducer,
    }
})