/* eslint-disable @typescript-eslint/no-explicit-any */
// reducers.ts

import { START_LOADING, STOP_LOADING } from '../actions/loadingActions';

interface LoadingState {
  isLoading: boolean;
}

const initialState: LoadingState = {
  isLoading: false,
};

const loadingReducer = (state = initialState, action: any): LoadingState => {
  switch (action.type) {
    case START_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case STOP_LOADING:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default loadingReducer;
