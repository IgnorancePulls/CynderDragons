import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';
import {go} from '@ngrx/router-store';

import * as mockData from '../mock-data/account-example-data';
import * as fromRoot from '../reducers';
import * as user from '../actions/user.actions';

@Component({
    selector: 'app-root',
    template: `        
        <app-header-container [accountName]="userName | async"
	                          [avatarSrc]="avatarSrc | async"
	                          (navigateHome)="handleNavigateHome()"
	                          (navigateMatches)="handleNavigateToMatches()"
	                          (navigateSearch)="handleNavigateToSearch()"></app-header-container>
	    <router-outlet></router-outlet>
    `,
    styles: [],
})
export class AppComponent implements OnInit {
    userName: Observable<string>;
    avatarSrc: Observable<string>;

    constructor(private store: Store<fromRoot.State>) {
        this.userName = this.store.select(fromRoot.getUserName);
        this.avatarSrc = this.store.select(fromRoot.getUserAvatarSrc);
    }

    ngOnInit() {
        const mockAccount = mockData.MockUserAccount;
        this.store.dispatch(new user.SetCurrentUserAction(mockAccount));
    }

    handleNavigateToMatches() {
        this.store.dispatch(go(['/matches']));
    }

    handleNavigateHome() {
        this.store.dispatch(go(['']));
    }

    handleNavigateToSearch() {
        this.store.dispatch(go(['/search']));
    }
}
