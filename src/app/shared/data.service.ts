import 'rxjs/add/operator/map';
import {Injectable} from '@angular/core';
import {Constants} from '../shared/app.constats';
import {HttpClient} from '@angular/common/http';
import {Candidate} from '../models/candidate.model';

@Injectable()
export class DataService {
    constructor(private http: HttpClient, private constants: Constants) {
    }

    public getRandomProfile(url: string) {
        return this.http.get(url)
            .map((res) => {
                return res as Candidate;
            });
    }

    public getProfile(preferredGender: string) {
        switch (preferredGender) {
            case this.constants.BOYS_KEY:
                return this.getRandomProfile(this.constants.RANDOM_BOY_PROFILE_URL);
            case this.constants.GIRLS_KEY:
                return this.getRandomProfile(this.constants.RANDOM_GIRL_PROFILE_URL);
            default:
                return this.getRandomProfile(this.constants.RANDOM_PROFILE_URL);
        }
    }
}
