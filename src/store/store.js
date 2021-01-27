import { configureStore } from '@reduxjs/toolkit';
import n8Reducer from '../reducer/n8Slice';

export default configureStore({
    reducer: {
        n8app: n8Reducer,
    },
});