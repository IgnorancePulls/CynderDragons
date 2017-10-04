import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {Effect, Actions, toPayload} from '@ngrx/effects';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/catch';
import {of} from 'rxjs/observable/of';
import {DataService} from '../shared/data.service';

import * as candidate from '../actions/candidate.actions';
import * as fromRoot from '../reducers/index';
import {GetNewCandidateComplete, GetNewCandidateFailed, GetNewCandidate} from '../actions/candidate.actions';


@Injectable()
export class CandidateEffects {
    matchesIds: number[];

    constructor(private dataService: DataService, private actions: Actions, private store: Store<fromRoot.State>) {
        store.select(fromRoot.getAllMatchesIds).subscribe((ids) => {
            this.matchesIds = ids;
        });
    }

    @Effect() getNewCandidate = this.actions.ofType(candidate.GET_NEW_CANDIDATE)
        .map(toPayload)
        .switchMap((preference) => this.dataService.getProfile(preference)
            .map((candidate) => { // This is bad, should be handled on server side
                if (this.matchesIds.includes(candidate.id)) {
                    return new GetNewCandidate('');
                }
                return new GetNewCandidateComplete(candidate);
            })
            .catch((err) => of(new GetNewCandidateFailed(err))
            ));
}
