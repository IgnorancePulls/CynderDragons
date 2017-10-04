import {Action} from '@ngrx/store';

export const SET_CURRENT_USER = '[USER] Set Current User';
export const SET_CURRENT_USER_PREFERED_GENDER = '[USER] Set Current User Preferred Gender';

export class SetCurrentUserAction implements Action {
    readonly type: string = SET_CURRENT_USER;

    constructor(public payload: any) {
    }
}

export class SetCurrentUserPreferredGenderAction implements Action {
    readonly type: string = SET_CURRENT_USER_PREFERED_GENDER;

    constructor(public payload: string) {
    }
}

export type UserActions =
    SetCurrentUserAction |
    SetCurrentUserPreferredGenderAction;

