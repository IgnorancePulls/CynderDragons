import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Candidate} from '../../models/candidate.model';

@Component({
    selector: 'app-search-component',
    templateUrl: './search.html',
    styleUrls: ['./search.less']
})
export class DetailsComponent implements OnInit {
    @Input() candidate: Candidate;
    @Input() isFetching: boolean;
    @Input() matchFoundModalOpen: boolean;
    @Output() empathyAction: EventEmitter<boolean> = new EventEmitter<boolean>();
    @Output() matchModalContinue: EventEmitter<void> = new EventEmitter<void>();
    @Output() matchModalToMatches: EventEmitter<void> = new EventEmitter<void>();

    constructor() {
    }

    ngOnInit() {
    }

    onLike() {
        this.empathyAction.emit(true);
    }

    onDislike() {
        this.empathyAction.emit(false);
    }

    handleMatchModalContinue() {
        this.matchModalContinue.emit();
    }

    handleMatchModalToMatches() {
        this.matchModalToMatches.emit();
    }
}
