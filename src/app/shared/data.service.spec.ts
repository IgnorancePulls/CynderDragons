import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {TestBed} from '@angular/core/testing';
import {DataService} from './data.service';
import {Constants} from '../shared/app.constats';

describe('Service: DataService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                HttpClientTestingModule
            ],
            providers: [
                Constants,
                DataService
            ]
        });
    });

    function setup() {
        return {
            constants: TestBed.get(Constants),
            http: TestBed.get(HttpTestingController),
            dataService: TestBed.get(DataService)
        };
    }

    const candidate = {
        id: 35360,
        name: 'Lillie Darkmoon',
        gender: 'girl',
        image: 'http://www.dragonsofmugloar.com/images/female/3.png',
        description: 'I am actually never going to contact you, I am just here to enjoy attractive dragons swiping me right.',
        likesYou: false
    };

    it('should call the getRandomProfile with random profile link if no gender specified', (done) => {
        const {constants, http, dataService} = setup();
        dataService
            .getRandomProfile(constants.RANDOM_PROFILE_URL)
            .subscribe((res) => {
                expect(res).toEqual(candidate);
                done();
            });
        http.expectOne(constants.RANDOM_PROFILE_URL).flush(candidate);
    });

    it('should call the getRandomProfile with boys profile link if boys gender specified', (done) => {
        const {constants, http, dataService} = setup();
        dataService
            .getRandomProfile(constants.RANDOM_GIRL_PROFILE_URL)
            .subscribe((res) => {
                expect(res).toEqual(candidate);
                done();
            });
        http.expectOne(constants.RANDOM_GIRL_PROFILE_URL).flush(candidate);
    });

    it('should call the getRandomProfile with girls profile link if girls gender specified', (done) => {
        const {constants, http, dataService} = setup();
        dataService
            .getRandomProfile(constants.RANDOM_BOY_PROFILE_URL)
            .subscribe((res) => {
                expect(res).toEqual(candidate);
                done();
            });
        http.expectOne(constants.RANDOM_BOY_PROFILE_URL).flush(candidate);
    });
});
