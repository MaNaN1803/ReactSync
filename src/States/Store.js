import { configureStore } from '@reduxjs/toolkit';
import incdecReducer from './Reducer/index';

export default configureStore({

    reducer:{
        number : incdecReducer
    }

})