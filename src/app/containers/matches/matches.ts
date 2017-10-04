import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Store} from '@ngrx/store';

import {Match} from '../../models/match.model';
import * as fromRoot from '../../reducers';

@Component({
    selector: 'app-matches-container',
    template: `
	    <div class="matches">
		    <h2 class="matches__list-title">Meet your flames, invite the to pottery class or yoga.<br>
			    Don't mess up the kingdom</h2>
		    <div class="matches__list">
			    <app-match-container *ngFor="let match of matches | async"
			                         [matchName]="match.name"
			                         [avatarSrc]="match.avatarSrc"></app-match-container>
		    </div>
	    </div>
    `,
    styleUrls: ['./matches.less']
})
export class MatchesComponent implements OnInit {
    matches: Observable<Array<Match>>;

    constructor(private store: Store<fromRoot.State>) {
        this.matches = store.select(fromRoot.getAllMatches);
    }

    ngOnInit() {
    }

}
