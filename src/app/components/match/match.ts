import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-match-container',
    templateUrl: './match.html',
    styleUrls: ['./match.less']
})
export class MatchComponent implements OnInit {
    @Input() matchName: string;
    @Input() avatarSrc: string;

    constructor() {
    }

    ngOnInit() {
    }

}
