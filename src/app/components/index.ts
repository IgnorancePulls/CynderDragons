import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {HeaderComponent} from '../components/header/header';
import {SelectComponent} from '../components/gender-select/gender-select';
import {DetailsComponent} from '../components/search/search';
import {MatchFoundModalComponent} from '../components/match-found-modal/match-found-modal';
import {MatchComponent} from '../components/match/match';

export const COMPONENTS = [
    HeaderComponent,
    SelectComponent,
    DetailsComponent,
    MatchFoundModalComponent,
    MatchComponent
];


@NgModule({
    imports: [
        CommonModule,
        RouterModule,
    ],
    declarations: COMPONENTS,
    exports: COMPONENTS
})
export class ComponentsModule {
}
