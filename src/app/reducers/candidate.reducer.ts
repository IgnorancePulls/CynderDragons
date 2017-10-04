import {Candidate} from '../models/candidate.model';
import {ErrorFact} from '../models/error.model';
import * as candidate from '../actions/candidate.actions';

export interface State {
    id: number;
    name: string;
    gender: string;
    image?: string;
    selectedCandidateGender?: string;
    description?: string;
    likesYou: boolean;
    isFetching: boolean;
    error: ErrorFact;
}

const initialState: State = {
    id: null,
    name: null,
    gender: null,
    image: null,
    selectedCandidateGender: null,
    description: null,
    likesYou: null,
    isFetching: null,
    error: {
        errorState: false,
        errorBody: null
    }
}

export const reducer =
    (state = initialState, action: candidate.Actions): State => {
        switch (action.type) {
            case candidate.GET_NEW_CANDIDATE:
                return Object.assign({}, state, {isFetching: true});
            case candidate.GET_NEW_CANDIDATE_COMPLETE:
                const newCandidate = action.payload as Candidate;
                const newCandidateState = Object.assign({}, state, newCandidate, {isFetching: false});
                return newCandidateState;
            case candidate.GET_NEW_CANDIDATE_FAILED:
                const error = action.payload;
                return Object.assign({}, state, {isFetching: false, error})
            default:
                return state;
        }
    };

export const getId = (state: State) => state.id;
export const getDetails = (state: State) => state;




