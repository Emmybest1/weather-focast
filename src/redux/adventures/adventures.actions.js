import {types} from './adventures.types';

export const fetchAdventuresStarted = () => ({type: types.FETCH_ADVENTURES_STARTED});

export const fetchAdventuresSuccess = (payload) => ({
  type: types.FETCH_ADVENTURES_SUCCESS,
  payload,
});

export const fetchAdventuresFailure = (payload) => ({
  type: types.FETCH_ADVENTURES_FAILURE,
  payload,
});

export const fetchAdventures = (countryName) => (dispatch) => {
  //ajax
};
