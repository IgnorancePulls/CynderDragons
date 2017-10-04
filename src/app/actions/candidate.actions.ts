import {Action} from '@ngrx/store';
import {Candidate} from '../models/candidate.model';

export const GET_NEW_CANDIDATE = '[CANDIDATE] Get New Candidate';
export const GET_NEW_CANDIDATE_COMPLETE = '[CANDIDATE] Get New Candidate Complete';
export const GET_NEW_CANDIDATE_FAILED = '[CANDIDATE] Get New Candidate Failed';

export class GetNewCandidate implements Action {
    readonly type: string = GET_NEW_CANDIDATE;

    constructor(public payload: string) {
    }
}

export class GetNewCandidateComplete implements Action {
    readonly type: string = GET_NEW_CANDIDATE_COMPLETE;

    constructor(public payload: Candidate) {
    }
}

export class GetNewCandidateFailed implements Action {
    readonly type: string = GET_NEW_CANDIDATE_FAILED;

    constructor(public payload: JSON) {
    }
}

export type Actions =
    GetNewCandidate |
    GetNewCandidateComplete |
    GetNewCandidateFailed;
