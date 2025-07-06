import { USER_ACTION_TYPES } from './user.types';
import { createAction } from '@/utils/reducer/reducer.utils';

export const setCurrentUser = (user) => {
    console.log('setCurrentUser action called with:', user); // Debug log
    const action = createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user);
    console.log('Created action:', action); // Debug log
    return action;
}