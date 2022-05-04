import { configureStore } from '@reduxjs/toolkit';
import productReducer from 'reducers/productReducer';
import trlReducer from 'reducers/trlReducer';

export const store = configureStore({
  reducer: { product: productReducer, trl: trlReducer }
});
