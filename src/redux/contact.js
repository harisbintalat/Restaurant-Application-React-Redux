import * as ActionTypes from './ActionTypes';

export const Contact = (state = {
    isLoading: true,
    errMess: null,
    feedback: []
}, action) => {
    switch (action.type) {

        case ActionTypes.ADD_CONTACT:
            var contact = action.payload;
            return { ...state, feedback: state.feedback.concat(contact) };

        default:
            return state;
    }
}