import {Injectable} from '@angular/core';

@Injectable()
export class Constants {
    public readonly BOYS_KEY = 'boy';
    public readonly GIRLS_KEY = 'girl';
    public readonly SERVER = 'http://www.dragonsofmugloar.com/';
    public readonly API_URL = 'dating/api/profile/';
    public readonly RANDOM_QUERY = 'random?gender=';
    public readonly SERVER_WITH_API_URL = this.SERVER + this.API_URL;
    public readonly RANDOM_PROFILE_URL = this.SERVER_WITH_API_URL + this.RANDOM_QUERY;
    public readonly RANDOM_BOY_PROFILE_URL = this.RANDOM_PROFILE_URL + this.BOYS_KEY;
    public readonly RANDOM_GIRL_PROFILE_URL = this.RANDOM_PROFILE_URL + this.GIRLS_KEY;

}