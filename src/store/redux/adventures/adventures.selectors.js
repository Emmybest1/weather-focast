import {createSelector} from 'reselect';

const selectAdventuresState = (state) => state.adventures;
export const selectisLoading = createSelector([selectAdventuresState], (adventures) => adventures.isLoading);
export const selectError = createSelector([selectAdventuresState], (adventures) => adventures.error);
export const selectAdventures = createSelector([selectAdventuresState], (adventures) => adventures.adventures);
