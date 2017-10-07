import {Store} from '@ngrx/store';
import {User} from '../models/user.model';

import * as fromRoot from '../reducers';
import * as fromUser from '../actions/user.actions';

export const MockUserAccount: User = {
    id: 1,
    name: 'Awesome Dragon',
    prefer: 'girl',
    avatarSrc: '../../../assets/images/avatar.svg'
};

export const EmptyUserAccount: User = {
    id: null,
    name: null,
    prefer: null,
    avatarSrc: null
}
