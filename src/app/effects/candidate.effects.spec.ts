import { EffectsTestingModule, EffectsRunner } from '@ngrx/effects/testing';
import { TestBed, fakeAsync } from '@angular/core/testing';
import {StoreModule} from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';
import {GetNewCandidate, GetNewCandidateComplete, GetNewCandidateFailed} from '../actions/candidate.actions';
import {CandidateEffects} from './candidate.effects';
import {DataService} from '../shared/data.service';
import {Candidate} from '../models/candidate.model';
import {reducer} from '../reducers';

describe('CandidateEffects', () => {
    beforeEach(() => TestBed.configureTestingModule({
        imports: [
            EffectsTestingModule,
            StoreModule.provideStore(reducer)
        ],
        providers: [
            CandidateEffects,
            {
                provide: DataService,
                useValue: jasmine.createSpyObj('dataService', ['getProfile'])
            }
        ]
    }));

    function setup(params?: {dataServiceReturnValue: any}) {
        const dataService = TestBed.get(DataService);
        if (params) {
            dataService.getProfile.and.returnValue(params.dataServiceReturnValue);
        }

        return {
            runner: TestBed.get(EffectsRunner),
            candidateEffects: TestBed.get(CandidateEffects)
        };
    }

    describe('getNewCandidate', () => {
        it('should return a new candidate.GetNewCandidateActionComplete, with candidate, on success', fakeAsync(() => {
            const candidate = {
                id: 35360,
                name: 'Lillie Darkmoon',
                gender: 'girl',
                image: 'http://www.dragonsofmugloar.com/images/female/3.png',
                description: 'I am actually never going to contact you, I am just here to enjoy attractive dragons swiping me right.',
                likesYou: false
            } as Candidate;

            const {runner, candidateEffects} = setup({dataServiceReturnValue: Observable.of(candidate)});

            const expectedResult = new GetNewCandidateComplete(candidate);

            runner.queue(new GetNewCandidate(''));

            let result = null;
            candidateEffects.getNewCandidate.subscribe(_result => result = _result);

            expect(result).toEqual(expectedResult);
        }));

        it('should return a new candidate.GetNewCandidateFailed, with error on fail', fakeAsync(() => {
            const {runner, candidateEffects} = setup({dataServiceReturnValue: Observable.throw(new Error())});

            const expectedResult = new GetNewCandidateFailed(new Error());

            let result = null;
            runner.queue(new GetNewCandidate(''));
            candidateEffects.getNewCandidate.subscribe(_result => result = _result);
            expect(result).toEqual(expectedResult);
        }));
    });
});