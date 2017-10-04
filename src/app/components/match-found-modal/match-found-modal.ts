import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
    selector: 'app-match-found-modal-component',
    templateUrl: './match-found-modal.html',
    styleUrls: ['./match-found-modal.less']
})
export class MatchFoundModalComponent implements OnInit {
    @Input() matchName: string;
    @Input() avatarSrc: string;
    @Output() matchModalContinue: EventEmitter<void> = new EventEmitter<void>()
    @Output() matchModalToMatches: EventEmitter<void> = new EventEmitter<void>()

    constructor() {
    }

    ngOnInit() {
    }

    continue() {
        this.matchModalContinue.emit();
    }

    toMatches() {
        this.matchModalToMatches.emit();
    }

}
