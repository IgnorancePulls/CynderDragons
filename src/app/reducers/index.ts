import {combineReducers, ActionReducer} from '@ngrx/store';
import {createSelector} from 'reselect';

import * as fromCandidate from './candidate.reducer';
import * as fromUser from './user.reducer';
import * as fromRouter from '@ngrx/router-store';
import * as fromMatches from './matches.reducer';
import * as fromLayout from './layout.reducer';

export interface State {
    candidate: fromCandidate.State;
    user: fromUser.State;
    router: fromRouter.RouterState;
    matches: fromMatches.State;
    layout: fromLayout.State;
}

const reducers = {
    user: fromUser.reducer,
    candidate: fromCandidate.reducer,
    router: fromRouter.routerReducer,
    matches: fromMatches.reducer,
    layout: fromLayout.reducer
};

const productionReducer: ActionReducer<State> = combineReducers(reducers);

export function reducer(state: any, action: any) {
    return productionReducer(state, action);
}

export const getUserState = (state: State) => state.user;
export const getUserName = createSelector(getUserState, fromUser.getName);
export const getUserPreference = createSelector(getUserState, fromUser.getUserPreference);
export const getUserAvatarSrc = createSelector(getUserState, fromUser.getSrc);

export const getCandidateState = (state: State) => state.candidate;
export const getCandidateDetails = createSelector(getCandidateState, fromCandidate.getDetails);

export const getMatchesState = (state: State) => state.matches;
export const getAllMatchesIds = createSelector(getMatchesState, fromMatches.getIds);
export const getAllMatches = createSelector(getMatchesState, fromMatches.getMatches);

export const getLayoutState = (state: State) => state.layout;
export const getMatchFoundModalOpen = createSelector(getLayoutState, fromLayout.getModal);



