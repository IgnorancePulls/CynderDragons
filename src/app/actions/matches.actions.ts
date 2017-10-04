import {Action} from '@ngrx/store';
import {Match} from '../models/match.model';

export const ADD_MATCH = '[MATCHES] Add Match';

export class AddMatch implements Action {
    readonly type: string = ADD_MATCH;

    constructor(public payload: Match) {
    }
}

export type Actions =
    AddMatch;