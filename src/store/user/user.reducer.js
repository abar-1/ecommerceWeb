import { USER_ACTION_TYPES } from "./user.types";

const INITIAL_STATE = {
    currentUser: null
}

const userReducer = (state=INITIAL_STATE, action) => {
    console.log('userReducer called with action:', action); // Debug log
    const { type, payload } = action;
    switch(type) {
        case USER_ACTION_TYPES.SET_CURRENT_USER:
            console.log('Setting current user to:', payload); // Debug log
            return {
                ...state,
                currentUser: payload
            }

        default:
            return state;

    }
}

export default userReducer;