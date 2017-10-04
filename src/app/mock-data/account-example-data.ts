import {Store} from '@ngrx/store';
import {User} from '../models/user.model';

import * as fromRoot from '../reducers';
import * as fromUser from '../actions/user.actions';

const mockAccount: User = {
    id: 1,
    name: 'Awesome Dragon',
    prefer: 'girl',
    avatarSrc: '../../../assets/images/avatar.svg'
};

export function CreateMockAccount(store: Store<fromRoot.State>) {
    store.dispatch(new fromUser.SetCurrentUserAction(mockAccount));
}
