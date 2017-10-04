import {Component, OnDestroy, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil';
import {go} from '@ngrx/router-store';

import {Candidate} from '../../models/candidate.model';
import {Match} from '../../models/match.model';

import * as fromRoot from '../../reducers';
import * as candidate from '../../actions/candidate.actions';
import * as matches from '../../actions/matches.actions';
import * as layout from '../../actions/layout.actions';

@Component({
    selector: 'app-search-container',
    template: `
	    <app-search-component [candidate]="candidateDetails" 
                              [isFetching]="isFetching"
	                          [matchFoundModalOpen]="matchFoundModalOpen | async"
	                          (matchModalContinue)="handleMatchModalContinue()"
	                          (matchModalToMatches)="handleMatchModalToMatches()"
	                          (empathyAction)="handleEmpathyAction($event)"></app-search-component>
    `,
    styles: []
})
export class SearchComponent implements OnInit, OnDestroy {
    private ngUnsubscribe: Subject<void> = new Subject<void>();
    candidateDetails: Candidate;
    preferredGender: string;
    isFetching: boolean;
    matchFoundModalOpen: Observable<boolean>;

    constructor(private store: Store<fromRoot.State>) {
        this.store.select(fromRoot.getCandidateDetails)
            .takeUntil(this.ngUnsubscribe)
            .subscribe((details) => {
                this.candidateDetails = details;
                this.isFetching = details.isFetching;
            });

        this.store.select(fromRoot.getUserPreference)
            .takeUntil(this.ngUnsubscribe)
            .subscribe((preference) => {
                this.preferredGender = preference;
            });
        this.matchFoundModalOpen = this.store.select(fromRoot.getMatchFoundModalOpen);
    }

    ngOnInit() {
        this.getNewCandidate();
    }

    ngOnDestroy() {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    }

    handleEmpathyAction(event: boolean) {
        event ? this.likeCandidate() : this.dislikeCandidate();
    }

    handleMatchModalContinue() {
        this.closeMatchFoundModal()
        this.getNewCandidate(this.preferredGender);
    }

    handleMatchModalToMatches() {
        this.closeMatchFoundModal();
        this.navigateToMatches();
    }

    getNewCandidate(preferredGender?: string) {
        this.store.dispatch(new candidate.GetNewCandidate(this.preferredGender));
    }

    dislikeCandidate() {
        this.getNewCandidate(this.preferredGender);
    }

    likeCandidate() {
        if (this.candidateDetails.likesYou) {
            this.addCandidateToMatches();
            this.openMatchFoundModal();
            return;
        }
        this.getNewCandidate(this.preferredGender);
    }

    addCandidateToMatches() {
        this.store.dispatch(new matches.AddMatch({
            id: this.candidateDetails.id,
            name: this.candidateDetails.name,
            avatarSrc: this.candidateDetails.image
        } as Match));
    }

    openMatchFoundModal() {
        this.store.dispatch(new layout.OpenMatchFoundModal());
    }

    closeMatchFoundModal() {
        this.store.dispatch(new layout.CloseMatchFoundModal());
    }

    navigateToMatches() {
        this.store.dispatch(go(['/matches']));
    }

}
