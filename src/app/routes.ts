import {Routes} from '@angular/router';
import {GenderSelectComponent} from './containers/gender-select/gender-select';
import {SearchComponent} from './containers/search/search';
import {MatchesComponent} from './containers/matches/matches';

export const routes: Routes = [
    {
        path: '',
        component: GenderSelectComponent
    },
    {
        path: 'search',
        component: SearchComponent
    },
    {
        path: 'matches',
        component: MatchesComponent
    },
    {
        path: '**',
        redirectTo: ''
    }
];
