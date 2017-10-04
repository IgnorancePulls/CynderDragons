import {Match} from '../models/match.model';
import * as matches from '../actions/matches.actions';
import {createSelector} from 'reselect';

export interface State {
    matchesList: Match[];
}

const initialState: State = {
    matchesList: []
};

export const reducer =
    (state = initialState, action: matches.Actions): State => {
        switch (action.type) {
            case matches.ADD_MATCH:
                return Object.assign({}, {matchesList: [...state.matchesList, action.payload as Match]});
            default:
                return state;
        }
    };

export const getState = (state: State) => state;
export const getIds = createSelector(getState, (matches) => {
    return matches.matchesList.map(match => match.id);
});

export const getMatches = createSelector(getState, (matches) => {
    return matches.matchesList;
});

