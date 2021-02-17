import {types} from './adventures.types';

export const initialState = Object.freeze({
  isLoading: false,
  error: null,
  adventures: [],
});

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_ADVENTURES_STARTED:
      return {...state, isLoading: true};

    case types.FETCH_ADVENTURES_SUCCESS:
      return {...state, isLoading: false, adventures: action.payload};

    case types.FETCH_ADVENTURES_FAILURE:
      return {...state, isLoading: false, error: action.payload};

    default:
      return state;
  }
};
