import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import { go} from '@ngrx/router-store';

import * as fromRoot from '../../reducers';
import * as user from '../../actions/user.actions';

@Component({
    selector: 'app-gender-select-container',
    template: `
	    <app-gender-select-component
			    (onGenderSelected)="handleGenderSelect($event)">
	    </app-gender-select-component>
    `,
    styles: []
})
export class GenderSelectComponent implements OnInit {
    constructor(private store: Store<fromRoot.State>) {
    }

    ngOnInit() {}

    handleGenderSelect(gender: string): void {
        this.store.dispatch( new user.SetCurrentUserPreferredGenderAction(gender));
        this.navigateToSearch();
    }

    navigateToSearch() {
        this.store.dispatch(go(['/search']));
    }

}
