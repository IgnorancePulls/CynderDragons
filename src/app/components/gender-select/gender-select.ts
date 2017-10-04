import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Store} from '@ngrx/store';

import {Constants} from '../../shared/app.constats';
import * as fromRoot from '../../reducers';

@Component({
    selector: 'app-gender-select-component',
    templateUrl: './gender-select.html',
    styleUrls: ['./gender-select.less']
})
export class SelectComponent implements OnInit {
    @Output() onGenderSelected: EventEmitter<string> = new EventEmitter<string>();

    boysKey: string;
    girlsKey: string;

    constructor(private store: Store<fromRoot.State>, private constants: Constants) {
        this.boysKey = constants.BOYS_KEY;
        this.girlsKey = constants.GIRLS_KEY;
    }

    ngOnInit() {
    }

    selectGirls(): void {
        this.onSelectGender(this.girlsKey);
    }

    selectBoys(): void {
        this.onSelectGender(this.boysKey);
    }

    onSelectGender(gender: string): void {
        this.onGenderSelected.emit(gender);
    }

}
