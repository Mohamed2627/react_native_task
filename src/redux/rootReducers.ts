import { combineReducers } from '@reduxjs/toolkit';
import { userAuth, tempReducer } from './slices';

const RootReducer = combineReducers({
    userAuth,
    tempReducer
});

export default RootReducer;