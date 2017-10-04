import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {routerReducer, RouterStoreModule } from '@ngrx/router-store';

import {ComponentsModule} from './components';
import { AppComponent } from './containers/app.component';
import { SearchComponent } from './containers/search/search';
import { MatchesComponent } from './containers/matches/matches';
import {GenderSelectComponent} from './containers/gender-select/gender-select';

import {reducer} from './reducers';
import {DataService} from './shared/data.service';
import {Constants} from './shared/app.constats';
import {CandidateEffects} from './effects/candidate.effects';
import {routes} from './routes';
export * from './app.module';

@NgModule({
    declarations: [
        AppComponent,
        GenderSelectComponent,
        SearchComponent,
        MatchesComponent,
    ],
    imports: [
        BrowserModule,
        StoreModule.provideStore(reducer, routerReducer),
        HttpClientModule,
        StoreDevtoolsModule.instrumentOnlyWithExtension(),
        EffectsModule.run(CandidateEffects),
        ComponentsModule,
        RouterModule.forRoot(routes, { useHash: false }),
        RouterStoreModule.connectRouter(),
    ],
    providers: [DataService, Constants],
    bootstrap: [AppComponent]
})
export class AppModule { }
