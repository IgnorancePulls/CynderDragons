import {User} from '../models/user.model';
import * as user from '../actions/user.actions';

export interface State {
    id: number;
    name: string;
    prefer: string;
    avatarSrc: string;
}

const initialState: State = {
    id: null,
    name: null,
    prefer: null,
    avatarSrc: null
};

export const reducer =
    (state = initialState, action: user.UserActions): State => {
        switch (action.type) {
            case user.SET_CURRENT_USER:
                const userDetails = action.payload;
                return Object.assign({}, state, userDetails as User);
            case user.SET_CURRENT_USER_PREFERED_GENDER:
                return Object.assign({}, state, {prefer: action.payload});
            default:
                return state;
        }
    };

export const getName = (state: State) => state.name;
export const getSrc = (state: State) => state.avatarSrc;
export const getUserPreference = (state: State) => state.prefer;



