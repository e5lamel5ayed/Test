import { configureStore } from '@reduxjs/toolkit';
import loadingReducer from './Reducers/loadingReducer';

export interface RootState {
  loading: {
    isLoading: boolean;
  };
}

export default configureStore({
  reducer: {
    loading: loadingReducer },
});
