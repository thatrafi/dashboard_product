import { configureStore } from '@reduxjs/toolkit';
import productReducer from 'reducers/productReducer';
import settingReducer from 'reducers/settingReducer';
import trlReducer from 'reducers/trlReducer';

export const store = configureStore({
  reducer: { product: productReducer, trl: trlReducer, setting: settingReducer }
});
