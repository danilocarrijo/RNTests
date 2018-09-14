import { FETCH_POST, GET_POST, DELETE_POST } from '../actions';
import _ from 'lodash';

export default function (state = {}, action) {

    switch (action.type) {
        case FETCH_POST:
            return _.mapKeys(action.payload.data, 'id');

        case GET_POST:
            return { ...state, [action.payload.data.id]: action.payload.data };
        case DELETE_POST:
            return _.omit(state,action.payload);
        default:
            return state;
    }
}