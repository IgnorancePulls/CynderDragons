import {Action} from '@ngrx/store';

export const OPEN_MATCH_FOUND_MODAL = '[LAYOUT] Open Match Found Modal';
export const CLOSE_MATCH_FOUND_MODAL = '[LAYOUT] Close Match Found Modal';

export class OpenMatchFoundModal implements Action {
    readonly type: string = OPEN_MATCH_FOUND_MODAL;
}

export class CloseMatchFoundModal implements Action {
    readonly type: string = CLOSE_MATCH_FOUND_MODAL;
}

export type Actions =
    OpenMatchFoundModal |
    CloseMatchFoundModal;


