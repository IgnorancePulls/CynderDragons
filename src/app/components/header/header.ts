import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
    selector: 'app-header-container',
    templateUrl: './header.html',
    styleUrls: ['./header.less']
})
export class HeaderComponent implements OnInit {
    @Input() accountName: string;
    @Input() avatarSrc: string;
    @Output() navigateSearch: EventEmitter<void> = new EventEmitter<void>()
    @Output() navigateHome: EventEmitter<void> = new EventEmitter<void>()
    @Output() navigateMatches: EventEmitter<void> = new EventEmitter<void>()

    constructor() {
    }

    ngOnInit() {
    }

    toSearch() {
        this.navigateSearch.emit();
    }

    toHome() {
        this.navigateHome.emit();
    }

    toMatches() {
        this.navigateMatches.emit();
    }
}
