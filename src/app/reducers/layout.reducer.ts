import * as layout from '../actions/layout.actions';

export interface State {
    matchFoundModalOpen: boolean;
}

export const InitialState: State = {
    matchFoundModalOpen: false
};

export const reducer =
    (state = InitialState, action: layout.Actions) => {
        switch (action.type) {
            case layout.OPEN_MATCH_FOUND_MODAL:
                return {
                    matchFoundModalOpen: true
                };
            case layout.CLOSE_MATCH_FOUND_MODAL:
                return {
                    matchFoundModalOpen: false
                };
            default:
                return state;
        }
    };

export const getModal =  (state: State) => state.matchFoundModalOpen;
