import {reducer, State, getName, getUserPreference, getSrc} from '../reducers/user.reducer';
import * as user from '../actions/user.actions';
import * as mockData from '../mock-data/account-example-data';

describe('UserReducer', () => {
    it('should have Initial State', () => {
        const expectedState = mockData.EmptyUserAccount;

        const state: State = reducer(undefined, {type: null, payload: null});
        expect(state).toEqual(expectedState);
    });

    it('should add new user to the store', () => {
        const expectedState = mockData.MockUserAccount;
        const state: State = reducer(undefined, {type: user.SET_CURRENT_USER, payload: expectedState});
        expect(state).toEqual(expectedState);
    });

    it('should change user preferred gender', () => {
        const expectedState = mockData.MockUserAccount;
        expectedState.prefer = 'boy';

        const initialState = mockData.MockUserAccount;

        const state: State = reducer(initialState, {type: user.SET_CURRENT_USER_PREFERED_GENDER, payload: 'boy'});
        expect(state).toEqual(expectedState);
    });

    it('getName should return current user name', () => {
        const initialState = mockData.MockUserAccount as State;

        const state = reducer(initialState, {type: null, payload: null});
        const userName = getName(state);
        expect(userName).toEqual(initialState.name);
    });

    it('getSrc should return current user avatar src', () => {
        const initialState = mockData.MockUserAccount as State;

        const state = reducer(initialState, {type: null, payload: null});
        const avatarSrc = getSrc(state);
        expect(avatarSrc).toEqual(initialState.avatarSrc);
    });

    it('getUserPreference should return current user gender preference', () => {
        const initialState = mockData.MockUserAccount as State;

        const state = reducer(initialState, {type: null, payload: null});
        const userGenderPreference = getUserPreference(state);
        expect(userGenderPreference).toEqual(initialState.prefer);
    });

});
